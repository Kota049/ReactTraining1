import { render, screen, within } from '@testing-library/react';
import Cell from './Cell';
import userEvent from '@testing-library/user-event';

describe('Cell', () => {
  it('show button', () => {
    render(<Cell />);
    expect(getButton()).not.toBeNull();
  });
  it('when button click,arg function called', async () => {
    const clickEvent = jest.fn();
    render(<Cell onClick={clickEvent} />);
    const button = getButton();
    await userEvent.click(button);

    expect(clickEvent).toHaveBeenCalled();
  });
  it('button has icon', () => {
    render(<Cell />);
    const icon = within(getButton()).getByTestId('DangerousIcon');
    expect(icon).not.toBeNull();
  });
});

const getButton = (): HTMLElement => {
  return screen.getByRole('button');
};
