const express = require('express');
const bodyParser = require('body-parser')
// Cross Origin resource sharing
const cors = require('cors')
// MongoDB interface.
const mongoose = require('mongoose');
// The Schema model for the forum posts.
let Post = require('./post.model')
// The router with all the post endpoints.
let postRouter = require('./post.router')
// The port for the express server.
const PORT = 3000;


// Connecting to the MongoDB DB
mongoose.connect('mongodb://127.0.0.1:27017/posts', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection to MongoDB succesful!');
});

// Our server setup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send("Hello there")
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
});