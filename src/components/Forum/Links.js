/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box,  styled, Link, Typography } from "@material-ui/core";
import {Link as Lien} from "react-router-dom"

//would be good to know what this stuff does.
// const useStyles = makeStyles(theme => ({
//   heading: { display: "flex", marginLeft: theme.spacing(2) },
//   root: {
//     "& > * + *": {
//       marginTop: theme.spacing(2),
//       marginLeft: theme.spacing(2),
//       display: "flex"
//     }
//   }
// }));

// const useStyles = makeStyles(theme => ({
//   root: {
//     marginTop: theme.spacing(2),
//     marginLeft: theme.spacing(2),
//     display: "wrap",
//     alignItems: 'flex-start'
//   }
// }));


//this component is on the left side and is all the links for the guideline page and notification form which should be changed at some point.
const MyBox = styled(Box)({
  // container: true,

  paddingLeft: 25
});

// const MyBox = styled(Box)({
//
//   root: {
//     "& Typography": {
//       paddingLeft: 25
//     }
//   }
// });

// notifications_none
export default function Links() {
  // const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <MyBox
    // className={classes.root}
    >
    
      <Typography
        // className={classes.heading}
        variant="subtitle1"
        gutterBottom
      >
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
        <Lien to="/StaticPage">
          Staic page using using react-router-dom
        </Lien>
      </div>
    </MyBox>
  );
}
