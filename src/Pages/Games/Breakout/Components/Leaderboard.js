import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from './util/data';

export default function Leaderboard() {

  const currentScore = localStorage.getItem("Breakout Best Score");

  const [score, setScore] = React.useState(currentScore);

  React.useEffect(() => {
    setInterval(() => {
      setScore(localStorage.getItem("Breakout Best Score"))
    }, 3000);
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Account Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={data.player.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.player.name}
              </TableCell>
              <TableCell align="right">{score}</TableCell>
              <TableCell align="right">50</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}