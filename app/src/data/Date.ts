import { DateStatus } from '../types';

const getDateList = (now: Date): DateStatus[] => {
  return [
    {
      startTime: new Date(2023, 8, 8, 8, 0),
      endTime: new Date(2023, 8, 8, 8, 30),
      status: 'VACANT',
    },
  ];
};

export default getDateList;
