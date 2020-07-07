import React from "react";
// import { makeStyles, styled, Paper, Typography, Grid, Box } from "@material-ui/core";

import SearchInput from "./SearchInput.js";
import Channels from "./Channels.js";
import Links from "./Links.js";
import NewPostForm from "./NewPostForm.js";


//This component combines all the left handside elements of the page into one component which is then fed into the combined component.
function LeftPanel(props) {
  return (
    <div>
      {" "}

      <NewPostForm
        // userPosts={props.userPosts}
        // setUserPosts={props.setUserPosts}
        addPost={props.addPost}
        
        // handleSubmit={props.handleSubmit}
        // handleChangeText={props.handleChangeText}
        // handleChangeTitle = {props.handleChangeTitle}
        // newPost={props.newPost}
        // setNewPost={props.setNewPost}
      />
      <SearchInput />
      <Channels />
      <Links />
      {/*</Paper>*/}
    </div>
  );
}

export default LeftPanel;
