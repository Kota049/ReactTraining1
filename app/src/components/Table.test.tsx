import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {
  it('table has table', () => {
    render(<Table />);
    expect(screen.getByRole('table')).not.toBeNull();
  });
});
