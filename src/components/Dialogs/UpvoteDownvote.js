import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'

export default function UpvoteDownvote(props) {

  return (
    <Grid
      style={{
        display: 'inline-block', maxWidth: '25px'
      }}
      disableGutters={true}
      xs={1}
    >
      <span style={{ cursor: 'pointer' }}>
        <KeyboardArrowUp
          color='primary'
          onClick={props.upvoteHandler}
        ></KeyboardArrowUp>{' '}
      </span>
      <Typography color='textPrimary' style={{ textAlign: 'center' }}>{props.votesState}</Typography>
      <span style={{ cursor: 'pointer' }}>
        <KeyboardArrowDown color='primary' onClick={props.downvoteHandler} />
      </span>
    </Grid >
  )
}
