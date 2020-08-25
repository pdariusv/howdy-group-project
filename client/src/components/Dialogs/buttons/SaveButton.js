import React from 'react';
import { Button } from "@material-ui/core"

const SaveButton = (props) => (
  <Button
    id={"save-button-" + props.reply.id}
    data-reply-id={props.reply.id}
    color={"primary"}
    size={"small"}
    variant={"outlined"}
    onClick={props.handleClick}
    style={{ marging: "0 10px 0 0" }}
    value={props.reply.id}
  >
    Save
  </Button>
);

export default SaveButton
