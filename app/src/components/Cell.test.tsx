import { render, screen } from '@testing-library/react';
import Cell from './Cell';
import userEvent from '@testing-library/user-event';

describe('Cell', () => {
  it('show button', () => {
    render(<Cell />);
    expect(getButton()).not.toBeNull();
  });
  it('when button click,arg function called', async () => {
    const clickEvent = jest.fn;
    render(<Cell onClick={clickEvent} />);
    const button = getButton();
    await userEvent.click(button);

    expect(clickEvent).toHaveBeenCalled();
  });
});

const getButton = (): HTMLElement => {
  return screen.getByRole('button');
};
