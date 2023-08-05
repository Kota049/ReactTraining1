import { renderHook } from '@testing-library/react';
import useIcon from './useIcon';

describe('useIcon for toggle icon', () => {
  it('return VACANT and function', () => {
    const { result } = renderHook(useIcon);
    expect(result.current[0]).toBe('VACANT');
    expect(typeof result.current[1]).toBe('function');
  });
});
