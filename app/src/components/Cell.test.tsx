import { render, screen } from '@testing-library/react';
import Cell from './Cell';

describe('Cell', () => {
  it('show button', () => {
    render(<Cell />);
    expect(getButton()).not.toBeNull();
  });
});

const getButton = (): HTMLElement => {
  return screen.getByRole('button');
};
