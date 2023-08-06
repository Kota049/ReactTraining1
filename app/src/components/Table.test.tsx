import { render, screen } from '@testing-library/react';
import DateTable from './Table';

describe('Table component', () => {
  it('table has table', () => {
    render(<DateTable />);
    expect(screen.getByRole('table')).not.toBeNull();
  });
  it('table has table header', () => {
    render(<DateTable />);
    const table = screen.getByRole('table');
    const th_list = table.getElementsByTagName('th');
    expect(th_list[0].textContent).toBe('8/8');
    expect(th_list[0].textContent).toBe('8/9');
    expect(th_list[0].textContent).toBe('8/10');
    expect(th_list[0].textContent).toBe('8/11');
    expect(th_list[0].textContent).toBe('8/12');
    expect(th_list[0].textContent).toBe('8/13');
    expect(th_list[0].textContent).toBe('8/14');
  });
});
