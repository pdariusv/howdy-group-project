import React, { useState } from "react"
import { Button, Grid, Typography, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    maringRight: "10px",
  },
}))

function ReplyText(props) {
  if (props.editEnabled === false) {
    return (
      <Typography component="div" variant="body2" color="textPrimary">
        {props.text}
      </Typography>
    )
  } else {
    return (
      <TextField
        name="reply"
        variant="outlined"
        label="Reply"
        onChange={props.updateText}
        placeholder="Type reply here..."
        fullWidth
        value={props.text}
        margin={"normal"}
      />
    )
  }
}

export default function PostReply(props) {
  const [state, setState] = useState({ edit: false, text: props.reply.text })

  const classes = useStyles()

  return (
    <Grid>
      <ReplyText
        text={state.text}
        editEnabled={state.edit}
        updateText={(e) => {
          setState({ ...state, text: e.target.value })
        }}
      />
      <Typography variant={"caption"}>{props.reply.username}</Typography>
      { props.currentUser.username === props.reply.username && (
      <Grid container spacing={1} style={{ paddingTop: '10px'}}>
        <Grid item>
          {!state.edit && (
            <Button
              id={"edit-button-" + props.reply.id}
              data-reply-id={props.reply.id}
              className={classes.control}
              color={"primary"}
              size={"small"}
              variant={"outlined"}
              disabled={props.currentUser.username !== props.reply.username}
              onClick={() => {
                setState({ ...state, edit: true })
              }}
              style={{ marging: "0 10px 0 0" }}
              value={props.reply.id}
            >
              Edit
            </Button>
          )}
          {state.edit && (
            <Button
              id={"edit-button-" + props.reply.id}
              data-reply-id={props.reply.id}
              className={classes.control}
              color={"primary"}
              size={"small"}
              variant={"outlined"}
              onClick={() => {
                setState({ ...state, edit: false })
                props.saveHandler(state)
              }}
              style={{ marging: "0 10px 0 0" }}
              value={props.reply.id}
            >
              save
            </Button>
          )}
        </Grid>
        <Grid item>
          <Button
            data-reply-id={props.reply.id}
            color={"secondary"}
            size={"small"}
            variant={"outlined"}
            onClick={() => props.removeReplyFunc(props.PostReply.id)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>)}
    </Grid>
  )
}
