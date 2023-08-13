import { DateStatus } from '../types';
import getDateList from './Date';

it('return tuesday DateStatus', () => {
  const current = new Date(2023, 8, 14);
  const result = getDateList(current);
  const expected: DateStatus = {
    startTime: new Date(2023, 8, 8, 8, 0),
    endTime: new Date(2023, 8, 8, 8, 30),
    status: 'VACANT',
  };

  expect(result[0]).toEqual(expected);
});
