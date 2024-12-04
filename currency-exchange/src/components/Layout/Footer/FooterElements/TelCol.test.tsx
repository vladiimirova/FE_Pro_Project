import { render, screen } from '@testing-library/react';
import TelCol from './TelCol';

describe('TelCol', function() {
  it('renders correctly', function() {
    render(<TelCol />);

    const telLink = screen.getByRole('link', { name: /8 800 111 22 33/i });
    expect(telLink).toHaveAttribute('href', 'tel:+88001112233');

    const telImage = screen.getByAltText('tel');
    expect(telImage).toBeInTheDocument();

    const text = screen.getByText(/безкожтовно для дзвінків в межах україни/i);
    expect(text).toBeInTheDocument();
  });
});
