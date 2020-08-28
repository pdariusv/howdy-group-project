import React from 'react';
import { Button } from "@material-ui/core"

const DeleteButton = ({ handleClick }) => (
  <Button
    color={"secondary"}
    size={"small"}
    variant={"outlined"}
    onClick={handleClick}
  >
    Delete
  </Button>
);

export default DeleteButton
