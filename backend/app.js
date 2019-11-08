const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import Mongoose which allows for dynamic data mutations
const mongoose = require('mongoose');
// Connect To DB
mongoose.connect('mongodb+srv://Dewayne:dewayne300@cluster0-pddul.mongodb.net/test?retryWrites=true&w=majority').then(() => {
  console.log('Connected to MDB');
})
// Import Models / Schema
const Post = require('./models/post');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


// Post API INPUT
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});


// Get API OUTPUT
app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

module.exports = app;
