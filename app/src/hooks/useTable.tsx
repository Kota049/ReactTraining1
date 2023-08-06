import { IconStatus } from './useIcon';

const useTable = ({ initialDateStatus }: Props): [DateStatus[], () => void] => {
  return [initialDateStatus, () => {}];
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
