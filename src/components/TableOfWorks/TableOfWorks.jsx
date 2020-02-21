import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(number, work, year) {
  return { number, work, year };
}

const rows = [
  createData("1","Эта тихая жизнь в Глубоком (документальный)", "1985"),
  createData(2, "Возвращение в Хатынь (фильм-спектакль)", "1986"),
  createData(3, "Взгляни на свой дом (документальный)" , "1986"),
  createData(4, "Упрямый человек (документальный)", "1987"),
  createData(5, "Здесь был Крылов (документальный)","1987"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="center">Work</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" align="center">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.work}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}