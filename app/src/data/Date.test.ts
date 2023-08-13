import { DateStatus } from '../types';
import getDateList from './Date';

it('return tuesday DateStatus', () => {
  const current = new Date(2023, 7, 14);
  const result = getDateList(current);
  const expected: DateStatus = {
    startTime: new Date(2023, 7, 8, 8, 0),
    endTime: new Date(2023, 7, 8, 8, 30),
    status: 'VACANT',
  };

  expect(result[0]).toEqual(expected);
});

it('return tuesday DateStatus depending on arg', () => {
  const current = new Date(2023, 7, 16);
  const result = getDateList(current);
  const expected: DateStatus = {
    startTime: new Date(2023, 7, 15, 8, 0),
    endTime: new Date(2023, 7, 15, 8, 30),
    status: 'VACANT',
  };

  expect(result[0]).toEqual(expected);
});
it('return 118 elenment', () => {
  const current = new Date(2023, 7, 16);
  const result = getDateList(current);
  expect(result.length).toBe(112);
});
