import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";

import LeftDivider from "./LeftDivider.js";
import ChannelMenu from "./ChannelMenu.js";

const MyBox = styled(Box)({
  // container: true,
  paddingLeft: 15
});

//This is the form for a new post (generated when the add new post button is pressed)

export default function NewPostForm(props) {
  //SET NEW POST TO STATE
  //Initial Form State
  const initialFormState = {
    id: null,
    title: "",
    name: null,
    postText: "",
    comment: null,
    flag: null,
    date: null,
    time: null
  };

  const [newPost, setNewPost] = useState(initialFormState);
  console.log("FormButtton.js - thisi s the inital title");
  const [open, setOpen] = React.useState(false);

  // Handle Submit of New Post
  const handleChangeText = event => {
    const { name, value } = event.target;

    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newPost.title || !newPost.postText) return;

    props.addPost(newPost);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //don't think userPosts is necessary here. To Check?
  console.log("props.newPost userPost (Old/updated)", props.userPosts);
  // console.log("props.newPost - newPost", props.newPost);

  return (
    <div>
      <MyBox>
        <Typography
          // className={classes.typography}
          variant="h6"
          gutterBottom
        >
          All Post
        </Typography>
        <Typography
          // className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          All Post from Your Channels
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          New Post +
        </Button>
        {/*FORM STARTS HERE */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Post</DialogTitle>
          <DialogContent>
            {/*<DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>*/}
            <ChannelMenu />
            <TextField
              autoFocus
              margin="normal"
              // id="name"
              name="title"
              label="Title"
              value={newPost.title}
              type="text"
              fullWidth
              onChange={handleChangeText}
            />

            <TextField
              autoFocus
              margin="normal"
              // id="name"
              name="postText"
              label="Post Reply here..."
              value={newPost.postText}
              type="text"
              fullWidth
              onChange={handleChangeText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={e => {
                handleClose();
                handleSubmit(e);
              }}
              color="primary"
            >
              Post
            </Button>


          </DialogActions>
        </Dialog>
      </MyBox>
      <LeftDivider />
    </div>
  );
}
