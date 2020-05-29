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

async function getPostByID(id) {
    //const id = post._id;
    const res = await fetch(`${URL}/${id}`);
    try {
        const post = await res.json()
        console.log('Got post with response: ', res)
        return post;
    } catch(error) {
        console.log('ERROR getting one post ', error);
        return false
    }
}

async function getAllPosts() {
    const res = await fetch(`${URL}`);
    try {
        const posts = await res.json()
        return posts;

    } catch(error) {
        console.log('ERROR getting all posts: ', error);
        return false;
    }
}

async function deletePost(post) {
    console.log('Deleting post', post)
    const id = post._id;
    const res = await fetch(`${URL}delete/${id}`, {
        method: 'POST'
    });
    try {
        const response = await res.json();
        console.log('Deleted post');
        return true;
    } catch(error) {
        console.log(res);
        console.log('ERROR deleting post: ', error);
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
            reply: 'another random comment to the post',
            notification: false
        },
    ]
}

let posts = [];
//addPost(demoPost);
getAllPosts()
.then((data) => {
    //console.log('Data is ', data);
    posts = data;
    //console.log('Got all posts: ', posts);
    console.log('posts are instance of ', posts.constructor.name)
    return posts;
})
.then((posts) => {
    console.log('POSTS are: ', typeof(posts), ' and length is: ', posts.length)
    //for (post of posts) {
    for (let i = 0; i < posts.length; i++) {
        post = posts[i];
        deletePost(post)
        /*
        getPostByID(post._id)
        .then(retPost => {
            console.log('Got this post ', retPost)
        })
        */
    }
})


/*
getAllPosts()
.then((posts) => {
    //console.log(posts)
})
*/