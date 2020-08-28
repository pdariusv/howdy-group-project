import React from 'react';
import { Button } from "@material-ui/core"

const SaveButton = ({ handleClick }) => (
  <Button
    color={"primary"}
    size={"small"}
    variant={"outlined"}
    onClick={handleClick}
  >
    Save
  </Button>
);

export default SaveButton
