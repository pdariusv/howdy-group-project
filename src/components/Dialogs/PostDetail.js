import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Button,
  Grid,
  styled,
  Typography,
  TextField,
  Box
} from "@material-ui/core";

import PostReplyList from "./PostReplyList.js";
import UpvoteDownVote from "./UpvoteDownvote.js";

const MyPaper = styled(Paper)({
  margin: 15
});

//Need to figure out how to keep text width fixed on screen size change?? Also need to understand nesting. For example should we combine the paper and box? Also how do we do fullheight for paper?
const MyBox = styled(Box)({
  marginLeft: 400,
  marginRight: 400,
  paddingTop: 15,
  paddingBottom: 15
});

const MyTextField = styled(TextField)({
  marginTop: 10,
  marginBottom: 10,
  //how to make width same width as text box?
  width: 650
});

//Post Detail Page which allows users to reply to a saved post.

export default function PostDetail(props) {
  // const classes = useStyles();

  //Find POST based on Params
  const postDetail = props.post.find(
    postDetail => props.match.params.id === `${postDetail.id}`
  );

  // filters out replies for a given post.
  const existingReplies = props.comments.filter(
    postReplies => props.match.params.id === `${postReplies.id}`
  );

  //SET STATE
  //Old replies that are currently in database or hard coded (i.e. dummy data)
  const [oldReply, setOldReply] = useState(existingReplies);

  //new replies that are added to a post.
  const [newReply, setNewReply] = useState([""]);

  //START HANDLER FUNCTIONS //

  //logic for adding a new reply.
  const addReply = replyVar => {
    const newReplies = [
      ...oldReply,
      {
        id: null,
        PostId: null,
        username: null,
        reply: replyVar,
        notification: null
      }
    ];
    console.log("PostDetail.js - addReply - reply", newReplies);
    setOldReply(newReplies);
  };

  //handles submit for new reply.
  const handleSubmit = e => {
    e.preventDefault();
    if (!newReply) return;
    addReply(newReply);
  };

  //handles change to text input for new reply.
  const handleChange = event => {
    setNewReply(event.target.value);
  };

  //removes a reply.
  const removeReplyFunc = arg => {
    const newReplies = [...oldReply];
    const newReplyAfterRemovals = newReplies.filter(reply => reply.id !== arg);
    setOldReply(newReplyAfterRemovals);
    console.log("this is the remove reply button", newReplyAfterRemovals);
  };

  console.log("PostDetail.js - reply hook variable", newReply);

  // //EDITING REPLY 
  //   const [editingReply, setEditingReply] = useState(false);

  //   const initialReplyFormState = {
  //     id: null,
  //     PostId: null,
  //     username: "",
  //     reply: "",
  //     notification: null
  //   };

  //   const [currentReply, setCurrentReply] = useState(initialReplyFormState);

  //   const editReply = 


  //   //JSX body that includes detail of post and replies associated.

  let votes = 0;
  const [votesState, setVotesState] = useState(votes)


  const upvote = () => {
    //props.voteHandler(props.post)
    //setVotesState(props.post.votes)
    setVotesState(votesState + 1)
  }

  const downvote = () => {
    //props.unvoteHandler(props.post)
    //setVotesState(props.post.votes)
    setVotesState(votesState - 1)
  }


  return (
    <div
    // className={classes.root}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MyPaper
            height="100%"

          // className={classes.paper}
          >
            <MyBox height="100%">
              {" "}
              <Typography component="div" variant="body1" color="textPrimary">
                <Link to="/">Home Page</Link>
              </Typography>
              <UpvoteDownVote
                upvoteHandler={upvote}
                downvoteHandler={downvote}
                votesState={votesState}
              ></UpvoteDownVote>
              <Typography component="div" variant="h5" color="textPrimary">
                {postDetail.title}
              </Typography>
              <Typography
                component="div"
                variant="body1"
                color="textPrimary"
              // className={classes.typoBody}
              >
                {postDetail.postText}
              </Typography>
              <form
              // onSubmit={handleSubmit}
              //form may not be necessary here since we have textfield.
              >
                <MyTextField
                  id="outlined-basic"
                  // className={classes.textField}
                  // label="Comment"
                  name="reply"
                  variant="outlined"
                  label="Reply"
                  onChange={handleChange}
                  placeholder="Type reply here..."
                />

                <div
                // className={classes.button}
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    // className={classes.button}
                    onClick={handleSubmit} //when does this needd to be refactored as a function call?
                  >
                    Submit
                  </Button>
                  {/*How do I filter the prop? so that the post array isn't sent to postreplies?*/}
                  <PostReplyList
                    // handleSubmit = {handleSubmit}
                    oldReply={oldReply}
                    removeReplyFunc={removeReplyFunc}
                  />
                </div>
              </form>
            </MyBox>
          </MyPaper>
        </Grid>
      </Grid>
    </div>
  );
}
