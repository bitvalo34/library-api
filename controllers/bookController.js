let books = []; // In-memory 'database'
let nextId = 1; // Simple ID generator

// Helper function for validation
const validateBook = (data) => {
  const { title, author, genre } = data;
  return title && author && genre;
};

// GET /books
export function getAllBooks(req, res) {
  res.status(200).json(books);
}

// GET /books/:id
export function getBookById(req, res) {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
}

// POST /books
export function createBook(req, res) {
  if (!validateBook(req.body)) {
    return res.status(400).json({ error: 'Missing required fields: title, author, genre' });
  }
  const newBook = { id: nextId++, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
}

// PUT /books/:id
export function updateBook(req, res) {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  if (!validateBook(req.body)) {
    return res.status(400).json({ error: 'Missing required fields: title, author, genre' });
  }
  books[index] = { id, ...req.body };
  res.status(200).json(books[index]);
}

// DELETE /books/:id
export function deleteBook(req, res) {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const deletedBook = books.splice(index, 1);
  res.status(200).json(deletedBook[0]);
}

