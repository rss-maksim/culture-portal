import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './TableOfWorks.css';

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


const useStyles = makeStyles({
  table: {
    marginTop: 10,
    paddingLeft:10
  },
  tableCell: {
    flex: 1,
    align: 'center',
    paddingLeft:10
  },
  tableRow: {
    paddingLeft:10
  }
 
  
});

export default function TableOfWorks({work}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="table">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">№</StyledTableCell>
            <StyledTableCell align="center">Work</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {work.map((work, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" align="center">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{work.name}</StyledTableCell>
              <StyledTableCell align="center">{work.date}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}