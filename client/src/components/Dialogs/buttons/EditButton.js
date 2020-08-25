import React from 'react';
import { Button } from "@material-ui/core"

const EditButton = (props) => (
  <Button
    id={"edit-button-" + props.reply.id}
    data-reply-id={props.reply.id}
    color={"primary"}
    size={"small"}
    variant={"outlined"}
    onClick={props.handleClick}
    style={{ marging: "0 10px 0 0" }}
    value={props.reply.id}
  >
    Edit
  </Button>
);

export default EditButton
