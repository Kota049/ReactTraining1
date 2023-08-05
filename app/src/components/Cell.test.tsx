import { render, screen } from '@testing-library/react';
import Cell from './Cell';

describe('Cell', () => {
  it('show button', () => {
    render(<Cell />);
    expect(screen.getByRole('button')).not.toBeNull();
  });
});
