import React from "react";

import Post from "./Post";

// import { postData } from "../../data/store.js;


//Component loops thru all post.  Stat for userPost was original kept here but moved to App.js for centralization purposes.

export const PostList = props => {
  //why do we need the useState hook and not just map over the imported postData is it kind of like redundant state?
  //Instead we might be ableo to use Object.entries() witht teh map function

  //SUBMITTED/OLD POST STATE CONTAINER
  // const [userPost, setUserPost] = useState(props.post);

  //NEW POST STATE CONTAINER

  // console.log("postlist", props);
  // const [newPost, setNewPost] = useState([""]);

  // const addPost = (postTitle, postBody) => {
  //   const newPosts = [
  //     ...props.userPost,
  //     {
  //       id: null,
  //       title: postTitle,
  //       name: null,
  //       postText: postBody,
  //       comment: null,
  //       flag: null,
  //       date: null,
  //       time: null
  //     }
  //   ];
  //   console.log("PostList.js - addPost - reply", newPosts);
  //   props.setUserPost(newPosts);
  // };

  // //Handle Submit of New Post
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!newPost) return;
  //   addPost(newPost);
  // };

  // //Handle Submit of New Post
  // const handleChange= e => {
  //   e.preventDefault();
  //   setNewPost(e.target.value)  ;
  // }

  // const removeReplyFunc = arg => {
  //   const newReplies = [...oldReply];
  //   const newReplyAfterRemovals = newReplies.filter(reply => reply.id !== arg);
  //   setOldReply(newReplyAfterRemovals);
  //   console.log("this is the remove reply button", newReplyAfterRemovals);
  // };

  // // console.log(" PostList.js - PostList - postData", userPost);
  if (props.userPosts) {
    return (
      <div>
        {props.userPosts.map((post, index) => (
          <Post
            key={index}
            post={post}
            deletePost={props.deletePost}
            editing={props.editing}
            setEditing={props.setEditing}
            editPost={props.editPost}
            currentPost={props.currentPost}
            updatePost={props.updatePost}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>No data</h1>
      </div>
    );
  }
};

// setUserPost={props.setUserPost}
