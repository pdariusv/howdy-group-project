/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box,  styled, Link, Typography } from "@material-ui/core";


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

  const handleClickMaPageStatique = () => {
    var myWindow = window.open("", "MyMessageWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
  };

  const handleClickMaPageStatique_self = () => {
    var myWindow = window.open("", "_self", "width=200,height=100");
    myWindow.document.write("<p>I replaced the current window.</p>");
  };
  
  const handleClickMaPageStatique_blank = () => {
    window.open("https://www.google.com/", "_blank",  "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  };

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
<<<<<<< HEAD
      <div>
      <Link variant="body2" href="https://www.google.com">
        Link[Il faut enlever le preventDefault]
      </Link>
      </div>
      <div>
      <Link variant="body2" href="#" onClick={handleClickMaPageStatique}>
        Link[Evenement click fonctionne bien]
      </Link>
      </div>
      <div>
      <Link variant="body2" href="#" onClick={handleClickMaPageStatique_self}>
        Link[Evenement click fonctionne bien _self]
      </Link>
      </div>
      <div>
      <Link variant="body2" href="#" onClick={handleClickMaPageStatique_blank}>
        Link[Evenement click fonctionne bien _blank]
      </Link>
      </div>
=======
>>>>>>> parent of f21fa4c... Add simple link called Directives to link module
    </MyBox>
  );
}
