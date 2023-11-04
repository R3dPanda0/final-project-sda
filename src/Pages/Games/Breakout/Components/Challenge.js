import { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import challengesData from './util/challengesData';

let challengeComplete = 0;

const keys = Object.keys(challengesData);

export default function Challenge() {
  
  const randomIndex = useRef(keys[Math.floor(Math.random() * keys.length)]);
  const challenge = challengesData[randomIndex.current];

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

  const [status, setStatus] = useState("Incomplete");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgress(localStorage.getItem(`Player Progress`))
    }, 1000);
  }, []);

  setInterval(() => {
    if(challengeComplete === 1) {
      const xp = Number(localStorage.getItem(`Player Xp`));
      const challengeXp = Number(challenge.reward);
      localStorage.setItem(`Player Xp`, xp + challengeXp);
      randomIndex.current = keys[Math.floor(Math.random() * keys.length)];
      challengeComplete = 0;
    }
  }, 500);


  useEffect(() => {
    setInterval(() => {
      if(Number(localStorage.getItem(`Player Progress`)) >= challenge.progress) {
        setStatus("Complete");
        setTimeout(() => {
          localStorage.setItem(`Player Progress`, 0);
        challengeComplete = 1;
        }, 3000);  
      }
      else if(Number(localStorage.getItem(`Player Progress`)) < challenge.progress) {
        setStatus("Incomplete");
      }
    }, 3000);  
  }, [challenge.progress]);

  const rows = [
    createData(`${challenge.name}`, `${progress}/${challenge.progress}`, `${status}`, `${challenge.reward}xp`),
  ];
  

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