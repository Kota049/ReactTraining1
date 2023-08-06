import { useState } from 'react';
import { IconStatus } from './useIcon';

const useTable = ({
  initialDateStatus,
}: Props): [DateStatus[], (startTime: Date) => void] => {
  const [dateStatus, setDateStatus] = useState(initialDateStatus);

  const updateStatus = (startTime: Date) => {
    const newStatus = dateStatus.map((element): DateStatus => {
      if (element.startTime.getTime() == startTime.getTime()) {
        return {
          ...element,
          status: element.status == 'VACANT' ? 'FULL' : 'VACANT',
        };
      }
      return element;
    });
    setDateStatus(newStatus);
  };
  return [dateStatus, updateStatus];
};

type Props = {
  initialDateStatus: DateStatus[];
};

export default useTable;

export interface DateStatus {
  startTime: Date;
  endTime: Date;
  status: IconStatus;
}