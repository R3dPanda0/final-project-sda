import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingStars() {

  const [value, setValue] = React.useState(localStorage.getItem("Breakout Rating"));

  localStorage.setItem("Breakout Rating", value);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rate the game:</Typography>
      <Rating
        name="simple-controlled"
        value={Number(value)}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}