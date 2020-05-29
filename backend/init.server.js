const fetch = require('node-fetch');
const URL = 'http://localhost:3000/posts/'
//const postData = require('./store')

async function addPost(post) {
    const res = await fetch(`${URL}/add`, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    try {
        const postRes = await res.json();
        console.log('Response for addPost was: ', postRes);
        return true;
    } catch(error) {
        console.log('ERROR adding post: ', error);
        return false;
    }
}

async function getAllPosts() {
    const res = await fetch(`${URL}`);
    try {
        const posts = await res.json();
        console.log('Got all posts: ', posts);
        return posts;
    } catch(error) {
        console.log('ERROR getting all posts: ', error);
        return false;
    }
}

async function deletePost(post) {
    const id = post._id;
    const res = await fetch(`${URL}/delete/${id}`);
    try {
        const response = await res.json();
        console.log('Deleted post');
        return true;
    } catch(error) {
        console.log('ERROR deleting post: ', error)
        return false;
    }
}

const demoPost = {
    //_id: 1,
    title: 'The almost-reactor',
    name: 'Randy Esposito',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    flag: 0,
    date: 'Nov 16, 2019',
    votes: 0,
    comment: [
        {
            username: 'user1',
            reply: 'this is a comment to the post',
            notification: false
        },
        {
            username: 'user2',
            reply: 'another comment to the post',
            notification: false
        },
    ]
}

addPost(demoPost);
const allPosts = getAllPosts();

console.log('POSTS are: ', typeof(allPosts))

/*
for (post of allPosts) {
    deletePost(post._id)
}

allPosts = getAllPosts();
*/