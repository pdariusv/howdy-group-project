/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box,  styled, Link, Typography } from "@material-ui/core";
//import {StaticPage} from "react-router-dom"

import { Route } from "react-router-dom";



//this component is on the left side and is all the links for the guideline page and notification form which should be changed at some point.
const MyBox = styled(Box)({
  // container: true,

  paddingLeft: 25
});



// notifications_none
export default function StaticPage() {
  
  return (
    <MyBox
    // className={classes.root}
    >
    <div>
        This is a static page. SPA asterix
    </div>
     </MyBox>
    
  );
}
