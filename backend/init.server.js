const demoDB = require('./demo.db.js')
const fetch = require('node-fetch');
const URL = 'http://localhost:3000/posts/'
let debug = false;

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
        if (debug) console.log('Response for addPost was: ', postRes);
        return true;
    } catch(error) {
        if (debug) console.log('ERROR adding post: ', error);
        return false;
    }
}

async function getPostByID(id) {
    //const id = post._id;
    const res = await fetch(`${URL}/${id}`);
    try {
        const post = await res.json()
        if (debug) console.log('Got post with response: ', res)
        return post;
    } catch(error) {
        if (debug) console.log('ERROR getting one post ', error);
        return false
    }
}

async function getAllPosts() {
    const res = await fetch(`${URL}`);
    try {
        const posts = await res.json()
        return posts;

    } catch(error) {
        if (debug) console.log('ERROR getting all posts: ', error);
        return false;
    }
}

async function deletePost(post) {
    if (debug) console.log('Deleting post', post)
    const id = post._id;
    const res = await fetch(`${URL}delete/${id}`, {
        method: 'POST'
    });
    try {
        const response = await res.json();
        if (debug) console.log('Deleted post ', post._id);
        return true;
    } catch(error) {
        if (debug) console.log(res);
        if (debug) console.log('ERROR deleting post: ', error);
        return false;
    }
}

async function loadDemoPosts(demoPosts) {
    for (demoPost of demoPosts) {
        if (debug) console.log('Adding demo post', demoPost)
        await addPost(demoPost);
    }
    return 1;
}

async function loadDemoDB() {
    const posts = await getAllPosts();
    await loadDemoPosts(demoDB.demoPosts)
}

async function checkDemoDBLoad() {
    const posts = await getAllPosts();
    if (posts.length === demoDB.demoPosts.length) {
        console.log('Demo DB loaded correctly')
    } else {
        console.log('ERROR loading Demo DB', posts.length, demoDB.demoPosts.length)
    }
    return 1;
}

 async function deleteAllPosts() {
    const posts = await getAllPosts()
    for (let i = 0; i < posts.length; i++) {
        ///let post = post[i];
        await deletePost(posts[i]);
    }
    return 1;
}

async function initServer() {
    getAllPosts()
    console.log('Deleting all posts to start from blank slate');
    await deleteAllPosts();
    console.log('Loading DEMO DB');
    await loadDemoDB();
    console.log('Checking that DEMO DB loaded correctly');
    await checkDemoDBLoad();
}

initServer()