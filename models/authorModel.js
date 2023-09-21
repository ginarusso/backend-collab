
const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

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
module.exports = Author
