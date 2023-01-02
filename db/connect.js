const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DataBase Connected!!"))
    .catch((err) => console.log(err))

module.exports = mongoose