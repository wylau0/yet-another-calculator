import { render, screen } from '@testing-library/react';
import Controls from './Controls';

test('renders learn react link', () => {
  render(<Controls />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
