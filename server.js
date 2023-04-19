const express = require("express");
const { json, urlencoded } = express
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.listen(3000, () => console.log("server is running at port 3000"));
