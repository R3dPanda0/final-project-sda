import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(Challenge, Progress, Status, Reward) {
  return { Challenge, Progress, Status, Reward};
}

const rows = [
  createData('Make 50 score in a single play', "0/50", "Incomplete", "100xp"),
  createData('Make 30 score in a single play', "0/30", "Incomplete", "50xp"),
  createData('Make 100 score in a single play', "0/100", "Incomplete", "200xp"),
  createData('Make 1000 score in total', "0/1000", "Incomplete", "500xp"),
  createData('Make 70 score in a single play', "0/70", "Incomplete", "65xp"),
];

export default function Challenges() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Challenge</StyledTableCell>
            <StyledTableCell align="right">Progress</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Reward</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Challenge}>
              <StyledTableCell component="th" scope="row">
                {row.Challenge}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Progress}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">{row.Reward}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}