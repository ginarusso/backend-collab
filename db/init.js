const { connectToDB } = require("../models/conn");
const Books = require("../models/bookModel");
const Authors = require("../models/authorModel");

async function initializeDB() {
  try {
    await Books.drop();
    await Authors.drop();
    await Authors.sync();
    await Books.sync();


    console.log("The tables were successfully created");
    return true;
  } catch (error) {
    console.error("the tables were not created, here is the error", error);
    return false;
  }
}

initializeDB();
