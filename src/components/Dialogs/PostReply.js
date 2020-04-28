import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import {
  Grid,
  Typography,
  ListItemText,
  styled,
  Button
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const MyGrid = styled(Grid)({
  // container: true,
  display: flexbox,
  paddingTop: 15
});

//??When I use this component why are all theme styles are overwritten?
const MyButton = styled(Button)({
  color: 'grey',
  fontSize: 10,
  
});


//this is the component for the reply.
export default function PostReplies(props) {
  console.log("PostReply.js - props", props);
  console.log("PostReply.js - props.removeReplyFunc", props.removeReplyFunc);
  // console.log("PostReply.js - psotReply", postReply);
  return (
    <div
    // className={classes.root}
    >
      <MyGrid container spacing={3}>
        <Grid item xs={12}>
          <ListItemText>
            <MyButton >{props.PostReply.username}</MyButton>
            <MyButton
           
              onClick={() => 
                props.removeReplyFunc(props.PostReply.id)
              }
            >
              Delete
            </MyButton>
            <MyButton
             
              onClick={() => {
                console.info("I'm an edit button.");
              }}
            >
              Edit
            </MyButton>

            <Typography
              component="div"
              variant="body1"
              color="textPrimary"
              // className={classes.typoBody}
            >
              {props.PostReply.reply}
            </Typography>
          </ListItemText>
        </Grid>
      </MyGrid>
    </div>
  );
}
