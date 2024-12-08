import { render, screen } from '@testing-library/react';
import AppCol from './AppCol'; 

function testSocialIcons() {
  render(<AppCol />);

  expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument();
}

test('social icons are rendered with correct labels', testSocialIcons);
