const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    postText: {
        type: String
    },
    flag: {
        type: Boolean
    },
    date: {
        type: Date
    },
    votes: {
        type: Number
    },
    comment: [{
        username: {
            type: String
        },
        reply: {
            type: String
        },
        notification: {
            type: Boolean
        }
    }]
})

module.exports = mongoose.model('Post', Post);
