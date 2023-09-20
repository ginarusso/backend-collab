const Author = require("../models/authorModel");

async function getAllAuthors(req,res){
    try {
        const results = await Author.findAll();
        res.status(200).json(results);
      } catch (error) {
        res.status(500).json({ message: error });
      }
}

async function getAuthorByID(req, res){
    try {
        const authorId = await Author.findByPk(req.params.id);
        res.status(200).json(authorId);
      } catch (error) {
        res.status(500).json({ message: error });
      }
}

async function addAuthor(req, res) {
    try {
        const author = req.body;

        if (author.author_name === null || author.bio === null || author.birthdate === null || author.book_id === null) {
            res.status(400).json({ message: "The author is missing some properties." });
        } else {
    
            const newAuthor = await Author.create(author)
            res.status(201).json(newAuthor)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

function deleteAuthor(req, res) {
    const authorId = req.params.id

    Author.destroy({where: {id:authorId}})
    .then(response => {
        if(response === 0) {
            res.status(404).json({message:"There was no author with that ID"})
        } else {
            res.status(200).json({message:"The author has been deleted."})
        }
    })
    .catch(error => {
        res.status(200).json({message: error})
    })
}

// async function editAuthor(req,res){
//     const {author_name, bio, birthdate} = req.body;
//     try {
//         await Author.update(
//             { author_name, bio, birthdate},
//             { where: { id: req.params.id } })
//     } catch (error) {
//         res.status(500).json({ message: error });
//       }}

async function editAuthor(req,res){
    const {author_name, bio, birthdate} = req.body;
    const authorId = req.params.id
    if (authorId === null || bio === null || birthdate === null) {
      res.status(400).json({message: "The author that you are trying to edit is missing some properties."})
    } else {
      Author.update({author_name, bio, birthdate}, {where: {id: authorId} })
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



module.exports = {getAllAuthors, getAuthorByID, addAuthor, deleteAuthor, editAuthor}