import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'

export default function Votes(props) {

  const clickUpArrowHandler = () => {
    props.upvoteHandler()
  }

  const clickDownArrowHandler = () => {
    props.downvoteHandler()
  }

  return (
    <Grid
      item
      lg={2}
      style={{
        textAlign: 'center'
      }}
    >
      <span style={{ cursor: 'pointer' }}>
        <KeyboardArrowUp
          color='primary'
          onClick={clickUpArrowHandler}
        ></KeyboardArrowUp>{' '}
      </span>
      <Typography color='textPrimary'>{props.votesState}</Typography>
      <span style={{ cursor: 'pointer' }}>
        <KeyboardArrowDown color='primary' onClick={clickDownArrowHandler} />
      </span>
    </Grid>
  )
}
