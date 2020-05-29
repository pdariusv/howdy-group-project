const mongoose = require('mongoose');
const express = require('express');

const postRouter = express.Router();
let Post = require('./post.model')

postRouter.route('/').get((req, res) => {
    Post.find((error, posts) => {
        if (error) {
            console.log('ERROR: ', error);
        } else {
            res.json(posts);
        }
    });
});

postRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    Post.findByID(id, (error, post) => {
        res.json(post);
    });
});

postRouter.route('/add').post((req, res) => {
    //let post = new Post(req.body);
    Post.create(req.body, (error, body) => {
        if (error) {
            console.log('ERROR: ', error)
            res.status(400).send('Adding a new post failed')
        } else {
            console.log('Post added', req.body)
            res.status(200).json({'post': 'Post was added'})
        }
    });
    /*
    post.save()
    .then(post => {
        res.status(200).json({'post': 'Post was added'})
    })
    .catch(error => {
        res.status(400).send('Adding a new post failed')
    });
    */
});

postRouter.route('/update/:id').post((req, res) => {
    Post.fingById(req.params.id, (error, post) => {
        if (!post) {
            res.status(404).send("Post not found");
        } else {
            post.title = req.body.post_title;
            post.name = req.body.post_name;
            post.postText = req.body.post_postText;
            post.comment = req.body.post_comment;
            post.flag = req.body.post_flag;
            post.date = req.body.post_date;
            post.votes = req.body.post_votes;

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

module.exports = postRouter