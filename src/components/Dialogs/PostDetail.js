import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Button,
  Container,
  Grid,
  styled,
  Typography,
  TextField,
  Box
} from "@material-ui/core";

import PostReplyList from "./PostReplyList.js";
import UpvoteDownVote from "./UpvoteDownvote.js";

export default function PostDetail(props) {

  const postDetail = props.post.find(
    postDetail => props.match.params.id === `${postDetail.id}`
  );

  const existingReplies = props.comments.filter(
    postReplies => props.match.params.id === `${postReplies.id}`
  );

  const [oldReply, setOldReply] = useState(existingReplies);
  const [newReply, setNewReply] = useState([""]);
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
    //const newReplies = [...oldReply];
    //const newReplyAfterRemovals = newReplies.filter(reply => reply.id !== arg);
    //setOldReply(newReplyAfterRemovals);
    //console.log("this is the remove reply button", newReplyAfterRemovals);
  };

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
    <Container>

      <Grid spacing={3} xs={8} style={{ margin: '0 auto' }}>
        <Paper>
          <Container container style={{ height: '100vh' }}>
            <Container style={{ padding: '2em 0' }}>
              <Typography>
                <Link to="/">Home Page</Link>
              </Typography>
            </Container>
            <Grid container>
              <UpvoteDownVote
                upvoteHandler={upvote}
                downvoteHandler={downvote}
                votesState={votesState}
              ></UpvoteDownVote>
              <Grid xs={10} style={{ display: 'inline-block', paddingLeft: '1em' }}>
                <Typography variant="h5" >
                  {postDetail.title}
                </Typography>
              </Grid>
            </Grid>
            <Typography>
              {postDetail.postText}
            </Typography>
            <form>
              <TextField
                id="outlined-basic"
                // className={classes.textField}
                // label="Comment"
                name="reply"
                variant="outlined"
                label="Reply"
                onChange={handleChange}
                placeholder="Type reply here..."
                fullWidth
                margin={'normal'}
              />
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                // className={classes.button}
                onClick={handleSubmit} //when does this needd to be refactored as a function call?
              >
                Submit
              </Button>
              <PostReplyList
                // handleSubmit = {handleSubmit}
                oldReply={oldReply}
                removeReplyFunc={removeReplyFunc}
              />
            </form>
          </Container>
        </Paper>

      </Grid>
    </Container >
  );
}
