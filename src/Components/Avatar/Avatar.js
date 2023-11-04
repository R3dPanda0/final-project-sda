import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '../../Images/avatar.png';
import Badge from '@mui/material/Badge';
import './Avatar.css';

import './Avatar.css'

const ImageAvatars = (

) => {

  const [level, setLevel] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLevel(Number(localStorage.getItem(`Player Level`)));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <div className='avatar'> 
      <Badge anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={level} color="error" size="large">
        <Avatar  sx={{ width: 40, height: 40 }} alt="" src={avatar} />
      </Badge>
      </div>
    )
}

export default ImageAvatars;