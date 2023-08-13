import { DateStatus } from '../types';

const getDateList = (now: Date): DateStatus[] => {
  let diff = 2 - now.getDay();
  if (diff > 0) {
    diff = diff - 7;
  }
  now.setDate(now.getDate() + diff);

  const result: DateStatus[] = [];

  timeSchedules.map((timeSchedule) => {
    for (let index = 0; index < 7; index++) {
      result.push({
        startTime: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + index,
          timeSchedule.startHour,
          timeSchedule.srartMinute
        ),
        endTime: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + index,
          timeSchedule.endHour,
          timeSchedule.endMinute
        ),
        status: 'VACANT',
      });
    }
  });

  return result;
};

export default getDateList;

interface timeSchedule {
  startHour: number;
  srartMinute: number;
  endHour: number;
  endMinute: number;
}

// todo:クソコード直す
const timeSchedules: timeSchedule[] = [
  {
    startHour: 8,
    srartMinute: 0,
    endHour: 8,
    endMinute: 30,
  },
  {
    startHour: 8,
    srartMinute: 30,
    endHour: 9,
    endMinute: 0,
  },
  {
    startHour: 9,
    srartMinute: 0,
    endHour: 9,
    endMinute: 30,
  },
  {
    startHour: 9,
    srartMinute: 30,
    endHour: 10,
    endMinute: 0,
  },
  {
    startHour: 10,
    srartMinute: 0,
    endHour: 10,
    endMinute: 30,
  },
  {
    startHour: 10,
    srartMinute: 30,
    endHour: 11,
    endMinute: 0,
  },
  {
    startHour: 11,
    srartMinute: 0,
    endHour: 11,
    endMinute: 30,
  },
  {
    startHour: 11,
    srartMinute: 30,
    endHour: 12,
    endMinute: 0,
  },
  {
    startHour: 13,
    srartMinute: 0,
    endHour: 13,
    endMinute: 30,
  },
  {
    startHour: 13,
    srartMinute: 30,
    endHour: 14,
    endMinute: 0,
  },
  {
    startHour: 14,
    srartMinute: 0,
    endHour: 14,
    endMinute: 30,
  },
  {
    startHour: 14,
    srartMinute: 30,
    endHour: 15,
    endMinute: 0,
  },
  {
    startHour: 15,
    srartMinute: 0,
    endHour: 15,
    endMinute: 30,
  },
  {
    startHour: 15,
    srartMinute: 30,
    endHour: 16,
    endMinute: 0,
  },
  {
    startHour: 16,
    srartMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    startHour: 16,
    srartMinute: 30,
    endHour: 17,
    endMinute: 0,
  },
];
