import { render, screen, within } from '@testing-library/react';
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
    expect(th_list[0].textContent).toBe('');
    expect(th_list[1].textContent).toBe('8/8');
    expect(th_list[2].textContent).toBe('8/9');
    expect(th_list[3].textContent).toBe('8/10');
    expect(th_list[4].textContent).toBe('8/11');
    expect(th_list[5].textContent).toBe('8/12');
    expect(th_list[6].textContent).toBe('8/13');
    expect(th_list[7].textContent).toBe('8/14');
  });
  it('table has row headding th', () => {
    render(<DateTable />);
    const table = screen.getByRole('table');
    const table_body = table.getElementsByTagName('tr');
    expect(table_body[1].getElementsByTagName('th')[0].textContent).toBe(
      '8:00~9:00'
    );
  });
  it('row has vacant icon', () => {
    render(<DateTable />);
    const table = screen.getByRole('table');
    const table_body = table.getElementsByTagName('tr');
    const tds = table_body[1].getElementsByTagName('td');
    expect(
      within(tds[0]).getByTestId('RadioButtonUncheckedIcon')
    ).not.toBeNull();
  });
});
