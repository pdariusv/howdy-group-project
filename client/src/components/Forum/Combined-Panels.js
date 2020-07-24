import React from "react";

import { Grid, Paper, styled } from "@material-ui/core";

import LeftPanel from "./Left-Panel";
import RightPanel from "./Right-Panel";


const MyGrid = styled(Grid)({
  // container: true,
  padding: 20,
  margin: 0
});



//THis puts the right and left panels together into one component.
function CombinedPanels(props) {
  return (
    <div>
      {/*comment below while working on postdetail.js */}

      <Paper>
        <MyGrid container>
          <Grid item xs={6}>
            <Grid container justify="center" spacing={1}>
              <LeftPanel
                // styles={styles}
                userPosts={props.userPosts}
                setUserPosts={props.setUserPosts}
                addPost={props.addPost}

                // handleSubmit={props.handleSubmit}
                // handleChangeText={props.handleChangeText}
                // handleChangeTitle = {props.handleChangeTitle}
                // newPost={props.newPost}
                // setNewPost={props.setNewPost}
              />
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container justify="flex-start" spacing={1}>
              <RightPanel
                userPosts={props.userPosts}
                // setUserPost={props.setUserPost}
                // styles={styles}
                deletePost={props.deletePost}
                editing={props.editing}
                setEditing={props.setEditing}
                editPost={props.editPost}
                currentPost={props.currentPost}
                updatePost={props.updatePost}
              />
            </Grid>
          </Grid>
        </MyGrid>
      </Paper>
    </div>
  );
}

export default CombinedPanels;
