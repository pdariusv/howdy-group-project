import React, { useState } from "react"
import { Grid, Typography, TextField } from "@material-ui/core"
import EditButton from './buttons/EditButton'
import SaveButton from './buttons/SaveButton'
import DeleteButton from './buttons/DeleteButton'

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
  const [isEditing, setIsEditing] = useState(false);
  const [replyText, setReplyText] = useState(props.reply.text);
  
  const startEditing = () => setIsEditing(true);
  const finishEditing = () => setIsEditing(false);
  const updateText = (e) => setReplyText(e.target.value);
  const saveHandler = () => {
    finishEditing();
    props.editHandler(replyText);
  };

  return (
    <Grid>
      <ReplyText
        text={replyText}
        editEnabled={isEditing}
        updateText={updateText}
      />
      <Typography variant={"caption"}>{props.reply.username}</Typography>
      { props.currentUser.username === props.reply.username && (
      <Grid container spacing={1} style={{ paddingTop: '10px'}}>
        <Grid item>
          {!isEditing && (
            <EditButton reply={props.reply} handleClick={startEditing} />
          )}
          {isEditing && (
            <SaveButton 
              reply={props.reply}
              handleClick={saveHandler}
            />
          )}
        </Grid>
        <Grid item>
          <DeleteButton reply={props.reply} handleClick={() => props.removeReplyFunc(props.PostReply.id)}/>
        </Grid>
      </Grid>)}
    </Grid>
  )
}
