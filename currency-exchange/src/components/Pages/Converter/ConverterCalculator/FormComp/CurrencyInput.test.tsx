import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyInput from './CurrencyInput';

describe('CurrencyInput Component', function () {
  const mockProps = {
    id: 'amount',
    currencyId: 'currency',
    label: 'Amount',
    register: jest.fn(function () { return { name: 'amount' }; }),
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

  test('renders the component with correct label and placeholder', function () {
    render(<CurrencyInput {...mockProps} />);
    expect(screen.getByText('Amount')).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText('Enter amount');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('100');
  });

  test('renders the select dropdown with correct options', function () {
    render(<CurrencyInput {...mockProps} />);
    const selectElement = screen.getByDisplayValue('USD');
    expect(selectElement).toBeInTheDocument();
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockProps.currencies.length);
    expect(options.map(function (option) { return option.textContent; })).toEqual(mockProps.currencies);
  });

  test('calls onChange and onChangeCurrency when inputs change', function () {
    render(<CurrencyInput {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(inputElement, { target: { value: '200' } });
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    const selectElement = screen.getByDisplayValue('USD');
    fireEvent.change(selectElement, { target: { value: 'EUR' } });
    expect(mockProps.onChangeCurrency).toHaveBeenCalledTimes(1);
  });

  test('displays error messages correctly', function () {
    const errorProps = {
      ...mockProps,
      error: {
        amount: { message: 'Invalid amount' },
        currency: { message: 'Invalid currency' },
      },
    };
    render(<CurrencyInput {...errorProps} />);
    expect(screen.getByText('Invalid amount')).toBeInTheDocument();
    expect(screen.getByText('Invalid amount').closest('div')).toHaveClass('text-red-500');
    expect(screen.queryByText('Invalid currency')).not.toBeInTheDocument();
  });
});
