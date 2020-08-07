import React from "react";
import { Box,  styled, Link, Typography } from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom"

const MyBox = styled(Box)({
  paddingLeft: 25
});

export default function Links() {
  const preventDefault = event => event.preventDefault();

  return (
    <MyBox>    
      <Typography variant="subtitle1" gutterBottom>
        Links
      </Typography>
      <div>
        <Link variant="body2" href="#" onClick={preventDefault}>
          Notifications
        </Link>
      </div>
      <Link variant="body2" href="#" onClick={preventDefault}>
        Guidlines
      </Link>
      <div>
      <Link variant="body2" href="#" onClick={preventDefault}>
         Directives
      </Link>
      </div>
      <div>
        <Link component={RouterLink} to="/static-page">
          Static Page
        </Link>
      </div>
    </MyBox>
  );
}
