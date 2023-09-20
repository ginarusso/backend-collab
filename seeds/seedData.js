const authorList = require("./seedAuthors");
const bookList = require("./seedBooks");
const Authors = require("../models/authorModel");
const Books = require("../models/bookModel");

async function addDataToDB() {
    try {
        console.log("Seeding authors...");
        await Authors.bulkCreate(authorList);
        console.log("Authors seeded successfully!");

        console.log("Seeding books...");
        await Books.bulkCreate(bookList);
        console.log("Books seeded successfully!");
    } catch (error) {
        console.error("Error seeding data:", error);
    } 
}

addDataToDB();
