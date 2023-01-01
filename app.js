const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const index = require("./routes/index")
const user = require("./routes/user")
const app = express();

// ejs
app.use(expressLayouts)
app.set("view engine","ejs")

// routes
app.use('/',index)
app.use('/users',user)

const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log(`Server running on ${PORT}...`));