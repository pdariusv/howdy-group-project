const mongoose = require('mongoose');
const express = require('express');

const postRouter = express.Router();
let Post = require('./post.model')

// Root Route: get all posts. 
postRouter.route('/').get((req, res) => {
    Post.find((error, posts) => {
        if (error) {
            console.log('ERROR: ', error);
        } else {
            res.json(posts);
        }
    });
});

// Get only one post for a given ID.
postRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    Post.findByID(id, (error, post) => {
        res.json(post);
    });
});

// Add a new post
postRouter.route('/add').post((req, res) => {
    Post.create(req.body, (error, body) => {
        if (error) {
            console.log('ERROR: ', error)
            res.status(400).send('Adding a new post failed')
        } else {
            console.log('Post added', req.body)
            res.status(200).json({'post': 'Post was added'})
        }
    });
});

// Update a post given an ID.
postRouter.route('/update/:id').post((req, res) => {
    Post.fingById(req.params.id, (error, post) => {
        if (!post) {
            res.status(404).send("Post not found");
        } else {
            post.title = req.body.title;
            post.name = req.body.name;
            post.postText = req.body.postText;
            post.comment = req.body.comment;
            post.flag = req.body.flag;
            post.date = req.body.date;
            post.votes = req.body.votes;

            post.save()
            .then(post => {
                res.json('Post updated!');
            })
            .catch(error => {
                res.status(400).send('Update not possible');
            });
        }
    });
});

// Delete a post given an ID.
postRouter.route('/delete/:id').post((req, res) => {
    Post.findById(req.params.id, (error, post) => {
        if (!post) {
            res.status(400).send("Post not found");
        } else {
            Post.deleteOne(post._id)
            .then(error => {
                res.status(400).send('Could not delete post.')
            })
        }
    })
})

module.exports = postRouter