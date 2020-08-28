import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import PostReply from "./PostReply.js";
import UpvoteDownVote from "./UpvoteDownvote.js";
import ReplyForm from "./ReplyForm.js";

export default function PostDetail(props) {
  const currentUser = { username: "CurrentUser" };

  const post = {
    id: 2,
    title: "These are great resources for learning Vue.js",
    name: "Scottie Wall",
    postText:
      "ya ya standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    replies: [{ id: 3 }],
    flag: 0,
    date: "Nov 16, 2019",
    time: "10:05pm",
    votes: 3,
  };

  const replies = [
    {
      id: 1,
      postId: 1,
      username: "user1",
      text: "this is a comment to the post",
      notification: "",
    },
    {
      id: 2,
      postId: 1,
      username: "user2",
      text: "another comment to the post",
      notification: "",
    },
    {
      id: 3,
      postId: 2,
      username: "user1",
      text: "yet another comment to the post",
      notification: "",
    },
  ];

  const [repliesState, setRepliesState] = useState(
    replies.filter((reply) => reply.postId === post.id)
  );

  let votes = post.votes;
  const [votesState, setVotesState] = useState(votes);

  const addReply = (text) => {
    const newReply = {
      id: Math.floor(Math.random() * 1000),
      postId: post.id,
      username: currentUser.username,
      text: text,
      notification: "",
    };

    setRepliesState(repliesState.concat(newReply));
  };

  const upvote = () => {
    //props.voteHandler(props.post)
    //setVotesState(props.post.votes)
    setVotesState(votesState + 1);
  };

  const downvote = () => {
    //props.unvoteHandler(props.post)
    //setVotesState(props.post.votes)
    setVotesState(votesState - 1);
  };

  const createEditReplyHandler = id => text => {
    const updatedReplies = repliesState.map(reply => {
      if (reply.id === id) {
        reply.text = text;
        return reply;
      }
      return reply;
    })
    setRepliesState(updatedReplies);
  };

  return (
    <Container>
      <Grid style={{ margin: "0 auto" }}>
        <Paper>
          <Grid container style={{ height: "100vh", overflow: "scroll" }}>
            <Container>
              <Container style={{ padding: "2em 0" }}>
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
                <Grid
                  item
                  style={{ display: "inline-block", paddingLeft: "1em" }}
                >
                  <Typography variant="h5">{post.title}</Typography>
                </Grid>
              </Grid>
              <Typography>{post.postText}</Typography>

              <ReplyForm addReplyHandler={addReply}></ReplyForm>
              {repliesState.map((reply) => (
                <Container key={reply.id} style={{ padding: "1em 0" }}>
                  <PostReply
                    reply={reply}
                    currentUser={currentUser}
                    editHandler={createEditReplyHandler(reply.id)}
                  />
                </Container>
              ))}
            </Container>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}
