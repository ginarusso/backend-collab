const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const authorRoutes = require("./routers/authorRoutes")
const bookRoutes = require("./routers/bookRoutes")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json("This is the home route")
})

app.use("/authors", authorRoutes)
app.use("/books", bookRoutes)

app.listen(port, () => {
    console.log("server is working")
})