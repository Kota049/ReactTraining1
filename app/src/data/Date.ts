import { DateStatus } from '../types';

const getDateList = (now: Date): DateStatus[] => {
  let diff = 2 - now.getDay();
  if (diff > 0) {
    diff = diff - 7;
  }
  now.setDate(now.getDate() + diff);

  return [
    {
      startTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        8,
        0
      ),
      endTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        8,
        30
      ),
      status: 'VACANT',
    },
  ];
};

export default getDateList;
