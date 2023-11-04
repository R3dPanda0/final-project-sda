import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Levelbar.css';

const LinearDeterminate = (

) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const level = Number(localStorage.getItem(`Player Level`));
      setProgress((oldProgress) => {
        const xp = Number(localStorage.getItem(`Player Xp`));
        if (oldProgress >= 100) {
          localStorage.setItem(`Player Xp`, 0);
          localStorage.setItem(`Player Level`, level+1);
          return 0;
        }
        return xp;
      });
    }, 1000);

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