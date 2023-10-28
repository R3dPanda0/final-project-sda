import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Levelbar.css';
import data from '../../Pages/Games/Breakout/Components/util/data';

const LinearDeterminate = (

) => {
const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const xp = data.player.score;
        if (oldProgress === 100) {
          return 0;
        }
        return xp;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ padding: '15px', width: '150px', color: '#A10000' }}>
      <LinearProgress variant="determinate" color="inherit" value={progress} />
    </Box>
  );
}

export default LinearDeterminate;