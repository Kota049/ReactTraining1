import { act, renderHook } from '@testing-library/react';
import useIcon from './useIcon';

describe('useIcon for toggle icon', () => {
  it('return VACANT and function', () => {
    const { result } = renderHook(useIcon);
    expect(result.current[0]).toBe('VACANT');
    expect(typeof result.current[1]).toBe('function');
  });
  it('when function called, IconStatus become FULL', () => {
    const { result } = renderHook(useIcon);
    const [iconStatus, updateMethod] = result.current;
    act(() => {
      updateMethod();
    });
    expect(iconStatus).toBe('FULL');
  });
});
