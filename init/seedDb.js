const mongoose = require('mongoose');
const PostModel = require('../src/post.model');

mongoose.connect('mongodb://127.0.0.1:27017/howdy', {useNewUrlParser: true, useUnifiedTopology: true});

async function seed() {
  const posts = await PostModel.find().exec();
  console.log('posts in db:', posts);
  mongoose.connection.close();
}

seed();
