const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5600
app.get("/", (req, res) => {
    return res.send("hii")
})

app.listen(port, (err) => {
    if (err) {
        console.log("server is not running")
    }
    else {
        console.log("server is running at port ", port)
    }
})