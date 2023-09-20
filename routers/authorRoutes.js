/**

Authors:

GET /authors: Retrieves a list of all authors.

GET /authors/:id: Retrieves details of a specific author by ID. This should also return a list of books associated with that author.

POST /authors: Create a new author.

PUT /authors/:id: Update details of an existing author by ID.


DELETE /authors/:id: Delete a specific author by ID.
 

*/

const express = require("express")
const router = express.Router()

const authorController = require("../controllers/authorsController")

router.get('/', authorController.getAllAuthors)
router.get('/:id', authorController.getAuthorByID)
router.post('/', authorController.addAuthor)
router.put('/:id', authorController.editAuthor)
router.delete('/:id', authorController.deleteAuthor)

module.exports = router