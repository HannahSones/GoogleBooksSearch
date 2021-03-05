const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// defining API routes
app.use(routes);

// connect to Mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");


app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}!`);
});