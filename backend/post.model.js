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
    comment: {
        type: Array
    },
    flag: {
        type: Boolean
    },
    date: {
        type: Date
    },
    votes: {
        type: Number
    }
})

module.exports = mongoose.model('Post', Post);