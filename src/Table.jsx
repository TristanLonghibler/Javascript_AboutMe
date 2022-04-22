import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sunday', 'N/A', 'N/A', 'Yes'),
  createData('Monday', 'Yes', 'Yes', 'Yes'),
  createData('Tuesday', 'N/A', 'N/A', 'Yes'),
  createData('Wednseday', 'Yes', 'N/A', 'Yes'),
  createData('Thursday', 'Yes', 'Yes', 'Yes'),
  createData('Friday', 'N/A', 'N/A', 'Yes'),
  createData('Saturday', 'N/A', 'N/A', 'N/A'),
];

export default function BasicTable() {
  const classes = useStyles();

  const customColumnStyle = { width: 12, backgroundColor: 'yellow' };

  return (

    <div style={{width:  '35%', height: '25%', display: 'block', marginLeft: '35%', marginRight: '35%'}}>
   <TableContainer width="50%" style={{}} component={Paper}>
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Availability:</TableCell>
            <TableCell style={customColumnStyle} align="right">Morning</TableCell>
            <TableCell style={customColumnStyle} align="right">Afternoon&nbsp;</TableCell>
            <TableCell style={customColumnStyle} align="right">Night&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={customColumnStyle} align="right">{row.calories}</TableCell>
              <TableCell style={customColumnStyle} align="right">{row.fat}</TableCell>
              <TableCell style={customColumnStyle} align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
