import React from "react";
import {
  List,
  ListItem,
  Button,
  ListItemIcon,
  ListItemText,
  Link,
  styled,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import EditPostForm from "./EditPostForm.js";

const MyButton = styled(Button)({
  color: "grey",
  fontSize: 10,
  marginLeft: 52,
  marginRight: -70,
  marginTop: -20,
});

export default function Post(props) {
  const { id, title } = props.post;
  const deletePost = () => props.deletePost(props.post.id);

  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <Icon fontSize="small">code</Icon>
        </ListItemIcon>
        <ListItemText>
          <Link href={`/posts/${id}`}>{title}</Link>
        </ListItemText>
      </ListItem>
      <EditPostForm {...props}/>
      <MyButton onClick={deletePost}>
        Delete
      </MyButton>
    </List>
  );
}
