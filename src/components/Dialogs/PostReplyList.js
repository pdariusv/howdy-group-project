import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostReply from "./PostReply";

//component which loops through all replies for a given post detail.

export default function PostReplyList(props) {
  // const classes = useStyles();

  return (
    <div>
      {props.oldReply.map((reply, index) => (
        <Grid key={index} container spacing={3}>
          <Grid key={index} item xs={12}>
            <Typography
              key={index}
              component="div"
              variant="body1"
              color="textPrimary"
              // className={classes.typoBody}
            >
              <PostReply
                key={index}
                PostReply={reply}
                removeReplyFunc={props.removeReplyFunc}
              />
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
