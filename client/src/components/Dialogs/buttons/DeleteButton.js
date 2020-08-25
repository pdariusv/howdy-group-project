import React from 'react';
import { Button } from "@material-ui/core"

const DeleteButton = (props) => (
  <Button
    data-reply-id={props.reply.id}
    color={"secondary"}
    size={"small"}
    variant={"outlined"}
    onClick={props.handleClick}
  >
    Delete
  </Button>
);

export default DeleteButton
