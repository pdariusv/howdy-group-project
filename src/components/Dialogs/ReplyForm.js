import React, { useState } from "react"
import {
    Button,
    TextField
} from "@material-ui/core";

export default function ReplyForm(props) {

    const [state, setState] = useState({ value: '' })

    const handleChange = (event) => {
        setState({ value: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addReplyHandler(state.value)
        setState({ value: '' })
    }

    return (
        <form>
            <TextField
                id="outlined-basic"
                name="reply"
                variant="outlined"
                label="Reply"
                onChange={handleChange}
                placeholder="Type reply here..."
                fullWidth
                value={state.value}
                margin={'normal'}
            />
            <Button
                variant="outlined"
                size="medium"
                color="primary"
                disabled={state.value.length < 10 ? true : false}
                // className={classes.button}
                onClick={handleSubmit} //when does this needd to be refactored as a function call?
            >
                Submit
              </Button>
        </form>
    )
}
