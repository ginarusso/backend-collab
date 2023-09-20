const Book = require("../models/bookModel");

async function getAllBooks(req, res) {
  try {
      const results = await Book.findAll();
      res.status(200).json(results);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

async function getBookByID(req,res){
    try {
        const bookID = await Book.findByPk(req.params.id);
        res.status(200).json(bookID);
      } catch (error) {
        res.status(500).json({ message: error });
      }
}

async function addBook(req,res){
    try {
        const newBook = req.body
        await Book.create(newBook)
        res.status(200).json(await Book.findAll());
      } catch (error) {
        res.status(500).json({ message: error });
      }
}

async function editBook(req,res){
    const {title, isbn, published, summary, authorId} = req.body;
    const bookId = req.params.id
    if (bookId === null || title === null || published === null || summary === null || authorId === null) {
      res.status(400).json({message: "The book that you are trying to edit is missing some properties."})
    } else {
      Book.update({title, isbn, published, summary, authorId}, {where: {id: bookId} })
      .then(response => {
        if (response[0] === 0) {
          res.status(404).json({message: "The id you have requested is not in the database."})
        } else {
          console.log(response)
          res.status(200).json({message: "The book has been edited"})
        }
      })
      .catch(error => {
        res.status(500).json({message: error})
      })
    }}

    function deleteBook(req, res) {
      const bookId = req.params.id;
    
      Book.destroy({ where: { id: bookId } })
        .then((response) => {
          if (response === 0) {
            res.status(404).json({ message: "There was no book with that ID" });
          } else {
            res.status(200).json({ message: "The book has been deleted." });
          }
        })
        .catch((error) => {
          res.status(500).json({ message: error.message });
        });
    }
module.exports = {getAllBooks, getBookByID, addBook, editBook, deleteBook}