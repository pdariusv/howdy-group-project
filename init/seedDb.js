const mongoose = require('mongoose');
const PostModel = require('../src/post.model');
const { posts } = require('./data/seed');

mongoose.connect('mongodb://127.0.0.1:27017/howdy', {useNewUrlParser: true, useUnifiedTopology: true});

async function seed() {
  let fetchedPosts = await PostModel.find().exec();
  console.log('posts in db:', fetchedPosts);
  posts.forEach(post => new PostModel(post).save());
  fetchedPosts = await PostModel.find().exec();
  console.log('posts in db:', fetchedPosts);
  mongoose.connection.close();
}

seed();
