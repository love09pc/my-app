import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD success message', () => {
  render(<App />);
  const message = screen.getByText(/자동으로 배포된다면 성공/i);
  expect(message).toBeInTheDocument();
});
