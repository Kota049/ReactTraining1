import { render, screen } from '@testing-library/react';
import DateTable from './Table';

describe('Table component', () => {
  it('table has table', () => {
    render(<DateTable />);
    expect(screen.getByRole('table')).not.toBeNull();
  });
});
