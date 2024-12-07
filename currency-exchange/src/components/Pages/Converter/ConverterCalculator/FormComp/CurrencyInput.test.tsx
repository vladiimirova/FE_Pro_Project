import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyInput from './CurrencyInput';

describe('CurrencyInput Component', () => {
  const mockProps = {
    id: 'amount',
    currencyId: 'currency',
    label: 'Amount',
    register: jest.fn(() => ({ name: 'amount' })),
    error: {
      amount: { message: '' }, 
      currency: { message: '' },
    },
    currencies: ['USD', 'EUR', 'GBP'],
    currencyValue: 'USD',
    placeholder: 'Enter amount',
    onChange: jest.fn(),
    onChangeCurrency: jest.fn(),
    value: '100',
  };

  test('renders the component with correct label and placeholder', () => {
    render(<CurrencyInput {...mockProps} />);

    // Перевіряємо, чи є мітка
    expect(screen.getByText('Amount')).toBeInTheDocument();

    // Перевіряємо input
    const inputElement = screen.getByPlaceholderText('Enter amount');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('100');
  });

  test('renders the select dropdown with correct options', () => {
    render(<CurrencyInput {...mockProps} />);

    // Перевіряємо select
    const selectElement = screen.getByDisplayValue('USD');
    expect(selectElement).toBeInTheDocument();

    // Перевіряємо опції
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockProps.currencies.length);
    expect(options.map((option) => option.textContent)).toEqual(mockProps.currencies);
  });

  test('calls onChange and onChangeCurrency when inputs change', () => {
    render(<CurrencyInput {...mockProps} />);

    // Зміна input
    const inputElement = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(inputElement, { target: { value: '200' } });
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);

    // Зміна select
    const selectElement = screen.getByDisplayValue('USD');
    fireEvent.change(selectElement, { target: { value: 'EUR' } });
    expect(mockProps.onChangeCurrency).toHaveBeenCalledTimes(1);
  });

  test('displays error messages correctly', () => {
    const errorProps = {
      ...mockProps,
      error: {
        amount: { message: 'Invalid amount' },
        currency: { message: 'Invalid currency' },
      },
    };
    render(<CurrencyInput {...errorProps} />);

    // Перевіряємо помилку для input
    expect(screen.getByText('Invalid amount')).toBeInTheDocument();

    // Перевіряємо, що блок для помилки відображається
    expect(screen.getByText('Invalid amount').closest('div')).toHaveClass('text-red-500');

    // Перевіряємо, що помилка для select не відображається, якщо вона є в іншому елементі
    expect(screen.queryByText('Invalid currency')).not.toBeInTheDocument();
  });
});
