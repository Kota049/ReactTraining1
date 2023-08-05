import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title test', () => {
  it('show title', () => {
    render(<Title />);
    let title = screen.getByRole('heading', { level: 2 });
    expect(title.textContent).toBe('今週のプランニング');
  });
});

export {};
