import { Router } from 'express';
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

const router = Router();

// GET /books - Retrieve all books
router.get('/', getAllBooks);

// GET /books/:id - Retrieve a specific book
router.get('/:id', getBookById);

// POST /books - Add a new book
router.post('/', createBook);

// PUT /books/:id - Update an existing book
router.put('/:id', updateBook);

// DELETE /books/:id - Remove a book
router.delete('/:id', deleteBook);

export default router;

