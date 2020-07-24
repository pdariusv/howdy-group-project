import React from "react";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  //Typography,
  Link,
  ListItemIcon,
  styled,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import EditPostForm from "./EditPostForm.js";

//component that reprsents a single post.

const MyButton = styled(Button)({
  color: "grey",
  fontSize: 10,
  marginLeft: 52,
  marginRight: -70,
  marginTop: -20,
  //paddingLeft: 70
});
export default function Post(props) {
  // const classes = useStyles();
  // console.log("Post.js - props", props);
  return (
    <List
    // className={classes.root}
    >
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <Icon fontSize="small">code</Icon>
        </ListItemIcon>
        {/**/}
        <ListItemText
          primary={
            <Link href={`/posts/${props.post.id}`}>{props.post.title}</Link>
          }
          secondary={
            <React.Fragment>
              {/*
              <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
              >
                {props.post.name}
              </Typography>
              {props.post.comment} {props.post.comment} {props.post.flag}{" "}
              {props.post.date} {props.post.time}
              */}
            </React.Fragment>
          }
        />
      </ListItem>
      <EditPostForm
        editing={props.editing}
        setEditing={props.setEditing}
        editPost={props.editPost}
        currentPost={props.currentPost}
        updatePost={props.updatePost}
        post={props.post}
      />
      />
      <MyButton
        onClick={() => {
          props.deletePost(props.post.id);
        }}
      >
        Delete
      </MyButton>
    </List>
  );
}
