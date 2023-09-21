
/**

Author Model:

Attributes:

id: Unique identifier (Primary Key)
name: Author's full name
bio: Short biography of the author
birthdate: Date of birth of the author
books: Associated books (One-to-Many relationship with the Books model)

*/

const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")
const Book = require("./bookModel")


const Author = connectToDB.define("author", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, 
{
    timestamps: false
})

Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });

module.exports = Author
