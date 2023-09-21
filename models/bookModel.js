/**
Book Model:

Attributes:

id: Unique identifier (Primary Key)
title: Title of the book
isbn: ISBN number
publishedDate: Publication date
summary: Short summary of the book
authorId: Foreign Key relating the book to an author 
 */
const { DataTypes } = require("sequelize");
const { connectToDB, testConnection } = require("./conn");
const Author = require("./authorModel")
testConnection();

const Book = connectToDB.define(
    "book", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING
        },
        isbn:{
            type: DataTypes.STRING
        },
        publishedDate:{
            type: DataTypes.INTEGER
        },
        summary:{
            type: DataTypes.STRING
        },
        authorId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false 
    }
)

Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });


module.exports = Book