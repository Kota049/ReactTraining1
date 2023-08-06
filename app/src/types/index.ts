export type IconStatus = 'VACANT' | 'FULL';

export interface DateStatus {
  startTime: Date;
  endTime: Date;
  status: IconStatus;
}
