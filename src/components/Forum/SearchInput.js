import React from "react";
import {
  Typography,
  Box,
  styled,
  TextField
} from "@material-ui/core";

import LeftDivider from "./LeftDivider.js";


//THis component provides search input. Logic for searching a post to be added later.

const MyBox = styled(Box)({
  paddingLeft: 15
});
export default function SearchInput() {
  // const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <div>
        <MyBox>
          <Typography
            // className={classes.typography}
            variant="subtitle1"
            gutterBottom
          >
            Search Post
          </Typography>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            // className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </MyBox>
        <LeftDivider />
      </div>
    </form>
  );
}
