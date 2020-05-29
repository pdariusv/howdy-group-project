const fetch = require('node-fetch');
const URL = 'http://localhost:3000/posts/'

async function addPost(post) {
    const res = await fetch(`${URL}/add`, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    try {
        const postRes = await res.json();
        console.log('Response for addPost was: ', postRes);
    } catch(error) {
        console.log('ERROR adding post: ', error);
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
    }
}

async function deletePost(id) {
    const res = await fetch(`${URL}/delete`)

}

const demoPost = {
    title: 'The almost-reactor',
    name: 'Randy Esposito',
    postText:
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    flag: 0,
    date: 'Nov 16, 2019',
    time: '11:10pm',
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

addPost(demoPost)
const allPosts = getAllPosts();

/*
for (post of allPosts) {
    deletePost(post._id)
}
*/