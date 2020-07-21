import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostReply from "./PostReply";

//component which loops through all replies for a given post detail.

export default function PostReplyList(props) {
  // const classes = useStyles();

  return (
    <div>
      {props.comments.map((comment, index) => (
        <Grid key={comment.id} container spacing={3}>
          <Grid item xs={12}>
            <Typography
              color="textPrimary"
            >
              <PostReply
                PostReply={comment}
                removeReplyFunc={props.removeReplyFunc}
              />
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
