import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
  Box
  // ListItemIcon
} from "@material-ui/core";

import LeftDivider from "./LeftDivider.js";

//This is for listing out the channels for posts.  Will need to add logic that allows user to select channel and than filter post related to that channel.
//Each ListItemText was wrapped in Listitem as below but removed as seemed redundant but lost default margins.

const MyBox = styled(Box)({
  marginLeft: 17
});

export default function Channels() {
  // const classes = useStyles();

  return (
    <div>
      <List
      // className={classes.root}
      >
        <ListItem alignItems="flex-start">
          <ListItemText primary="Channels" />
        </ListItem>
        <MyBox>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textPrimary"
                >
                  > General
                </Typography>
              </React.Fragment>
            }
          />

          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textPrimary"
                >
                  > Technical
                </Typography>
              </React.Fragment>
            }
          />

          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textPrimary"
                >
                  > Jobs Related
                </Typography>
              </React.Fragment>
            }
          />
        </MyBox>

        <LeftDivider />
      </List>
    </div>
  );
}
