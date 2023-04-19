const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { json, urlencoded } = express;
const app = express();
app.use(json());

mongoose.connect("mongodb+srv://das:kattumuridasu@cluster0.jyfvrc5.mongodb.net/?retryWrites=true&w=majority", () => console.log("server is running"));
app.use(urlencoded({ extended: false }));
app.listen(4000, () => console.log("server is running at port 4000"));  