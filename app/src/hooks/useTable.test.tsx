import { renderHook } from '@testing-library/react';
import useTable, { DateStatus } from './useTable';

describe('useTable', () => {
  it('return arg object', () => {
    const { result } = renderHook(useTable);
    const initialDateStatus: DateStatus[] = [
      {
        startTime: new Date(2023, 8, 7, 9, 0),
        endTime: new Date(2023, 8, 7, 9, 29),
        status: 'VACANT',
      },
      {
        startTime: new Date(2023, 8, 7, 9, 30),
        endTime: new Date(2023, 8, 7, 9, 59),
        status: 'VACANT',
      },
    ];
    expect(result.current[0]).toEqual(initialDateStatus);
  });
});
