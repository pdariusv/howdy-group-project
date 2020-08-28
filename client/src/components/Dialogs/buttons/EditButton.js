import React from 'react';
import { Button } from "@material-ui/core"

const EditButton = ({ handleClick }) => (
  <Button
    color={"primary"}
    size={"small"}
    variant={"outlined"}
    onClick={handleClick}
  >
    Edit
  </Button>
);

export default EditButton
