import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from './util/data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Leaderboard() {

  const currentScore = localStorage.getItem("Breakout Best Score");
  const currentLevel = localStorage.getItem("Player Level");

  const [score, setScore] = React.useState(currentScore);
  const [level, setLevel] = React.useState(currentLevel);

  React.useEffect(() => {
    setInterval(() => {
      setScore(localStorage.getItem("Breakout Best Score"))
    }, 3000);
  }, [])

  React.useEffect(() => {
    setInterval(() => {
      setLevel(localStorage.getItem("Player Level"))
    }, 1000);
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Account Level</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={data.player.name}>
              <StyledTableCell component="th" scope="row">
              {data.player.name}
              </StyledTableCell>
              <StyledTableCell align="right">{score}</StyledTableCell>
              <StyledTableCell align="right">{level}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}