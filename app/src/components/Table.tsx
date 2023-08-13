import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import Cell from './Cell';
import useTable from '../hooks/useTable';
import { DateStatus } from '../types';

const DateTable = () => {
  const dateList: DateStatus[] = [
    {
      startTime: new Date(2023, 8, 8, 8, 0),
      endTime: new Date(2023, 8, 8, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 9, 8, 0),
      endTime: new Date(2023, 8, 9, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 10, 8, 0),
      endTime: new Date(2023, 8, 10, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 11, 8, 0),
      endTime: new Date(2023, 8, 11, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 12, 8, 0),
      endTime: new Date(2023, 8, 12, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 13, 8, 0),
      endTime: new Date(2023, 8, 13, 8, 30),
      status: 'VACANT',
    },
    {
      startTime: new Date(2023, 8, 14, 8, 0),
      endTime: new Date(2023, 8, 14, 8, 30),
      status: 'VACANT',
    },
  ];
  const [dateStatus, updateDateStatus] = useTable({
    initialDateStatus: dateList,
  });
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
            {dateStatus.map((date) => {
              return (
                <TableCell key={date.startTime.getTime()}>
                  <Cell
                    status={date.status}
                    onClick={() => {
                      updateDateStatus(date.startTime);
                    }}
                  />
                </TableCell>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DateTable;
