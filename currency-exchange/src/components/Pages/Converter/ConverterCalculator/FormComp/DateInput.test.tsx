import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from './DateInput'; 
import '@testing-library/jest-dom';

describe('DateInput', () => {
  const mockRegister = jest.fn();
  const mockOnChange = jest.fn();

  const defaultProps = {
    id: 'date-input',
    register: mockRegister,
    error: undefined,
    onChange: mockOnChange,
  };

  test('renders DateInput component correctly', () => {
    render(<DateInput {...defaultProps} />);
    
    // Перевірка, чи є input з відповідним id
    const inputElement = screen.getByTestId('date-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('displays error message when there is an error', () => {
    const errorProps = {
      ...defaultProps,
      error: { message: 'Invalid date' },
    };

    render(<DateInput {...errorProps} />);
    
    // Перевірка, чи відображається помилка
    const errorMessage = screen.getByText('Invalid date');
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not display error message when there is no error', () => {
    render(<DateInput {...defaultProps} />);
    
    // Перевірка, що помилка не відображається
    const errorMessage = screen.queryByText('Invalid date');
    expect(errorMessage).toBeNull();
  });

  test('calls onChange function when value changes', () => {
    render(<DateInput {...defaultProps} />);
    
    // Знайти input за data-testid
    const inputElement = screen.getByTestId('date-input');
    
    // Симулюємо зміну значення
    fireEvent.change(inputElement, { target: { value: '2024-12-05' } });
    
    // Перевірка, чи викликається onChange
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
