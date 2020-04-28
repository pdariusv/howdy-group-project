import React from "react";

// import { Paper } from "@material-ui/core";

import { PostList } from "./PostList.js";


//This copmonent houses post list for organizational purposes.
function RightPanel(props) {
  console.log("right-panel.js RightPanel", props);
  return (
    <div>
      {/*<Paper 
    // style={props.styles.Paper}
    >*/}
      {/*<PostList style={styles.Container} /> */}
      <PostList
        userPosts={props.userPosts}
        // setUserPost={props.setUserPost}
        deletePost={props.deletePost}
        editing={props.editing}
        setEditing={props.setEditing}
        editPost={props.editPost}
        currentPost={props.currentPost}
        updatePost={props.updatePost}
      />
      {/* </Paper> */}
    </div>
  );
}

export default RightPanel;
