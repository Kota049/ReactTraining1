import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import Cell from './Cell';

const DateTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>8/8</TableCell>
            <TableCell>8/9</TableCell>
            <TableCell>8/10</TableCell>
            <TableCell>8/11</TableCell>
            <TableCell>8/12</TableCell>
            <TableCell>8/13</TableCell>
            <TableCell>8/14</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <th>8:00~9:00</th>
            <TableCell>
              <Cell />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DateTable;
