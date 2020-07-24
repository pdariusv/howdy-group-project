import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core";

// import LeftDivider from "./LeftDivider.js";
import ChannelMenu from "./ChannelMenu.js";

//This componnet is the form that is generated (with the editable post text) when user selects 'edit' button attached to a given post.
const MyButton = styled(Button)({
  color: "grey",
  fontSize: 10,
  marginLeft: 52,
  marginRight: -70,
  marginTop: -20,
  //paddingLeft: 70
});

export default function EditPostForm(props) {
  //SET NEW POST TO STATE
  //Initial Form State

  console.log("");

  //ONe issue is that when the comment first mounts, post is the empty object.
  //But once you click on the edit the empty object should be updated per editPost method.
  //However, this doesn't happen because the updated post variable is not being passed back down to the EditPost Form.
  //SO you have to use effect hook or you could perhaps pass props.current post instead
  //Which one is better? One questin is why do you even need [post, setPost] below?
  //Why not just use prop.currentPost instead?
  //We can useEffect hook to let the child (EditPostForm.js) know about the parent change of currentPost.
  // IN what cases does it know about the parent change and what instances does it not get notified?

  const [post, setPost] = useState(props.currentPost);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setPost(props.currentPost);
  }, [props.currentPost]);

  //Why does this render so many times?
  //console.log("EditPostForm - currentPost", props.currentPost);
  // console.log("EditPostForm - props.post", props.post);

  // Handle Submit of New Post
  const handleChangeText = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.updatePost(post.id, post);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MyButton
        color="primary"
        onClick={() => {
          handleClickOpen();
          props.editPost(props.post);
        }}
        // onClick = {()=> console.log("this is the edit props body", props.post.id )}
      >
        Edit
      </MyButton>
      {/*FORM STARTS HERE */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Post</DialogTitle>
        <DialogContent>
          <ChannelMenu />
          <TextField
            autoFocus
            margin="normal"
            // id="name"
            name="title"
            label="Title"
            value={post.title}
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
            value={post.postText}
            type="text"
            fullWidth
            onChange={handleChangeText}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              props.setEditing(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              handleClose();
              handleSubmit(e);
            }}
            color="primary"
          >
            Update Post
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
