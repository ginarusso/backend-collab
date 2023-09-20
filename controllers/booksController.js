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
    try {
        await Book.update(
            { title, isbn, published, summary,authorId },
            { where: { id: req.params.id } })
    } catch (error) {
        res.status(500).json({ message: error });
      }}

async function deleteBook(req, res) {
    const BookID = req.params.id;
    try{
        await Book.destroy({ where: { id: BookID } })  
    }catch (error) {
        res.status(500).json({ message: error });
}}

module.exports = {getAllBooks, getBookByID, addBook, editBook, deleteBook}