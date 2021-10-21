
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import API from '../Apis/feedback';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//form validation needed

export default () => {
  const [rating, setRating] = React.useState(1);
  const [comment, setComment] = React.useState('');
  const [sessionId, setSessionId] = React.useState('');
  const [userId, setUserId] = React.useState('');

  const submitHandler = async () => {
    const feedback = {
      userId,
      sessionId,
      rating,
      comment
    }
    const msg = await API.feedbacks.post(feedback)
    alert(msg)
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        Player View
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <TextField
          required
          id="outlined-required"
          label="User ID"
          defaultValue={userId}
          onChange={(event,) => {
            setUserId(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <TextField
          required
          id="outlined-required"
          label="Session ID"
          defaultValue={sessionId}
          onChange={(event,) => {
            setSessionId(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <TextField
          required
          id="outlined-required"
          label="Comment"
          defaultValue={comment}
          onChange={(event,) => {
            setComment(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <Button
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Box>
    </>


  );
}
