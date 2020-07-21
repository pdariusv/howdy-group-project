import React from "react";
import { styled, Divider } from "@material-ui/core";


//stylistic divider component.

const MyDivider = styled(Divider)({
  // container: true,
 margin: 15,
});


export default function LeftDivider() {
  // const classes = useStyles();

  return (
    <MyDivider
      // className={classes.typography}
      variant="middle"
    />
  );
}
