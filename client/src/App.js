import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { comments, postData } from "./data/store.js";
import CombinedPanels from "./components/Forum/CombinedPanels";
import PostDetail from "./components/Dialogs/PostDetail.js";

function App() {
  // Initial form state is for setting current post. This is then updated based on the post that the user wants to edit.
  const initialFormState = {
    id: null,
    title: "",
    name: null,
    postText: "",
    comment: null,
    flag: null,
    date: null,
    time: null,
  };

  // sets inital list of posts that are stored in db (currently dummy data in store.js)
  const [userPosts, setUserPosts] = useState(postData);
  // current post is used for editing
  const [currentPost, setCurrentPost] = useState(initialFormState);
  // editing switch.  However, this is not used as newpost and edit existing forms are in seperate pages.
  const [editing, setEditing] = useState(false);
  // set fetching state during db fetch requests
  const [isFetching, setIsFetching] = useState(false);

  // logic for fetching posts from the server
  const fetchAllPosts = React.useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await axios.get("/posts/");
      setUserPosts(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  // logic for adding new post.
  const addPost = (newPost) => {
    newPost.id = userPosts.length + 1;
    const newPosts = [...userPosts, newPost];
    console.log("App.js - addPost - newPosts updated", newPosts);
    setUserPosts(newPosts);
    // setUserPost(initialFormState);
  };

  // logic for deleting post.
  const deletePost = (id) => {
    setEditing(false);
    setUserPosts(userPosts.filter((post) => post.id !== id));
  };

  // logic for updating a post once it's edited.
  const updatePost = (id, updatedPost) => {
    setEditing(false);
    setUserPosts(
      userPosts.map((post) => (post.id === id ? updatedPost : post))
    );
  };

  // edits existin post.
  const editPost = (post) => {
    setEditing(true);

    setCurrentPost({
      id: post.id,
      title: post.title,
      name: post.name,
      postText: post.postText,
      comment: post.comment,
      flag: post.flag,
      date: post.date,
      time: post.time,
    });
  };

  /*****REPLY CONTROLLER LOGIC SHOULD GO HERE BUT CURRENTLY IN POSTDETAIL.JS; NEEDS TO BE RE-FACTORED.*********/

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={(props) => (
          <CombinedPanels
            {...props}
            // post={postData}
            userPosts={userPosts}
            setUserPosts={setUserPosts}
            addPost={addPost}
            deletePost={deletePost}
            editing={editing}
            setEditing={setEditing}
            editPost={editPost}
            currentPost={currentPost}
            updatePost={updatePost}
          />
        )}
      />
      <Route
        path="/posts/:id"
        render={(props) => (
          <PostDetail {...props} comments={comments} post={postData} />
        )}
      />
    </div>
  );
}

export default App;
