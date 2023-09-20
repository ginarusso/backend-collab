/**
1. Author Model:

Attributes:

id: Unique identifier (Primary Key)
name: Author's full name
bio: Short biography of the author
birthdate: Date of birth of the author
books: Associated books (One-to-Many relationship with the Books model)

2. Book Model:

Attributes:

id: Unique identifier (Primary Key)
title: Title of the book
isbn: ISBN number
publishedDate: Publication date
summary: Short summary of the book
authorId: Foreign Key relating the book to an author 

 */

const {Sequelize} = require("sequelize")

const connectToDB = new Sequelize("books", "ginarusso", "password1234", {
    host:"localhost",
    dialect:"postgres"
})

async function testConnection() {
    try {
        await connectToDB.authenticate()
        console.log("successful connections to db")
        return true
    } catch (error) {
        console.error("error:", error)
        return false
    }
}
// testConnection()
module.exports = {connectToDB, testConnection}