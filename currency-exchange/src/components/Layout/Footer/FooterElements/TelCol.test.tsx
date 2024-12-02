// TelCol.test.tsx
import { render, screen } from '@testing-library/react';
import TelCol from './TelCol';

describe('TelCol', () => {
  it('renders correctly', () => {
    render(<TelCol />);

    // Перевірка, чи є посилання з правильним href
    const telLink = screen.getByRole('link', { name: /8 800 111 22 33/i });
    expect(telLink).toHaveAttribute('href', 'tel:+88001112233');

    // Перевірка, чи є зображення з правильним alt
    const telImage = screen.getByAltText('tel');
    expect(telImage).toBeInTheDocument();

    // Перевірка тексту під зображенням
    const text = screen.getByText(/безкожтовно для дзвінків в межах україни/i);
    expect(text).toBeInTheDocument();
  });
});
