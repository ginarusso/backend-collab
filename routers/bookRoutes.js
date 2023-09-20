/**
Books:

GET /books: Retrieves a list of all books.

GET /books/:id: Retrieves details of a specific book by ID.

POST /books: Create a new book.

PUT /books/:id: Update details of an existing book by ID.

DELETE /books/:id: Delete a specific book by ID.
 */

const express = require("express")
const router = express.Router()

const bookController = require("../controllers/booksController")

router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getBookByID)
router.post('/', bookController.addBook)
router.put('/:id', bookController.editBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router