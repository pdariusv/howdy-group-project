import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Paper,
  Button,
  Grid,
  styled,
  Typography,
  TextField,
  Box,
  Badge,
  makeStyles
} from '@material-ui/core'
// import { sizing } from "@material-ui/system";

import PostReplyList from './PostReplyList.js'

const MyPaper = styled(Paper)({
  margin: 15
})

//Need to figure out how to keep text width fixed on screen size change?? Also need to understand nesting. For example should we combine the paper and box? Also how do we do fullheight for paper?
const MyBox = styled(Box)({
  marginLeft: 400,
  marginRight: 400,
  paddingTop: 15,
  paddingBottom: 15
})

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(1)
  }
}))

const MyTextField = styled(TextField)({
  marginTop: 10,
  marginBottom: 10,
  //how to make width same width as text box?
  width: 650
})

//Post Detail Page which allows users to reply to a saved post.

export default function PostDetail (props) {
  // const classes = useStyles();

  const classes = useStyles()

  const [state, setState] = useState({ vote: true })

  //Find POST based on Params
  const postDetailInitialState = props.post.find(
    postDetail => props.match.params.id === `${postDetail.id}`
  )

  // filters out replies for a given post.
  const existingReplies = props.comments.filter(
    postReplies => props.match.params.id === `${postReplies.id}`
  )

  //SET STATE
  //Old replies that are currently in database or hard coded (i.e. dummy data)
  const [replies, setReplies] = useState(existingReplies)

  const [postDetail, setPostDetailState] = useState(postDetailInitialState)

  const [votesState, setVoteState] = useState(postDetail.votes)

  const [formState, setformState] = useState({ text: '' })

  const [textFieldState, setTextFieldState] = useState({
    text: ''
  })

  //new replies that are added to a post.
  //const [newReply, setNewReply] = useState([''])

  //START HANDLER FUNCTIONS //

  //logic for adding a new reply.
  const addReply = reply => {
    const newReplies = [...replies, reply]
    console.log('PostDetail.js - addReply - reply', newReplies)
    setReplies(newReplies)
  }

  //handles submit for new reply.
  const handleSubmit = e => {
    e.preventDefault()
    if (!replies) return

    const newReply = {
      id: 69,
      PostId: postDetail.id,
      username: 'username999',
      reply: textFieldState.text,
      notification: true
    }

    addReply(newReply)
    setTextFieldState({ text: '' })
  }

  const handleVote = e => {
    if (state.vote) {
      setVoteState(votesState + 1)
    } else {
      setVoteState(votesState - 1)
    }

    setState({ vote: state.vote ? false : true })
  }

  //handles change to text input for new reply.
  const handleChange = event => {
    console.log('handleChange')
    setTextFieldState({ text: event.target.value })
  }

  //removes a reply.
  const removeReplyFunc = arg => {
    const newReplyAfterRemovals = replies.filter(reply => reply.id !== arg)
    setReplies(newReplyAfterRemovals)
    console.log('this is the remove reply button', newReplyAfterRemovals)
  }

  console.log('PostDetail.js - reply hook variable', replies)

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
  return (
    <div
    // className={classes.root}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MyPaper
            height='100%'

            // className={classes.paper}
          >
            <MyBox height='100%'>
              {' '}
              <Typography component='div' variant='body1' color='textPrimary'>
                <Link to='/'>Home Page</Link>
              </Typography>
              <Badge
                color='secondary'
                badgeContent={votesState}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <Typography component='div' variant='h5' color='textPrimary'>
                  {postDetail.title}
                </Typography>
              </Badge>
              <Typography
                component='div'
                variant='body1'
                color='textPrimary'
                // className={classes.typoBody}
              >
                {postDetail.postText}
              </Typography>
              <form
              // onSubmit={handleSubmit}
              //form may not be necessary here since we have textfield.
              >
                <MyTextField
                  id='outlined-basic'
                  // className={classes.textField}
                  // label="Comment"
                  name='reply'
                  variant='outlined'
                  //label='Reply'
                  value={textFieldState.text}
                  onChange={handleChange}
                  placeholder='Write something'
                />

                <div
                // className={classes.button}
                >
                  <Button
                    variant='outlined'
                    size='medium'
                    color='primary'
                    // className={classes.button}
                    onClick={handleSubmit} //when does this needd to be refactored as a function call?
                  >
                    Submit
                  </Button>

                  <Button
                    className={classes.button}
                    variant='outlined'
                    size='medium'
                    color='primary'
                    // className={classes.button}
                    onClick={handleVote} //when does this needd to be refactored as a function call?
                  >
                    {state.vote ? 'Vote' : 'Unvote'}
                  </Button>
                  {/*How do I filter the prop? so that the post array isn't sent to postreplies?*/}
                  <PostReplyList
                    // handleSubmit = {handleSubmit}
                    oldReply={replies}
                    removeReplyFunc={removeReplyFunc}
                  />
                </div>
              </form>
            </MyBox>
          </MyPaper>
        </Grid>
      </Grid>
    </div>
  )
}
