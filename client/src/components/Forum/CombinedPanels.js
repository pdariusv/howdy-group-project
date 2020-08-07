import React from "react";
import { Grid, styled } from "@material-ui/core";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const MyGrid = styled(Grid)({
  padding: 20,
  margin: 0
});

function CombinedPanels(props) {
  return (
    <MyGrid container>
      <Grid item xs={6}>
        <Grid container justify="center" spacing={1}>
          <LeftPanel
            userPosts={props.userPosts}
            setUserPosts={props.setUserPosts}
            addPost={props.addPost}
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
  );
}

export default CombinedPanels;
