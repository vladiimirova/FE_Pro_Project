import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from './DateInput'; 
import '@testing-library/jest-dom';

describe('DateInput', function () {
  const mockRegister = jest.fn();
  const mockOnChange = jest.fn();

  const defaultProps = {
    id: 'date-input',
    register: mockRegister,
    error: undefined,
    onChange: mockOnChange,
  };

  test('renders DateInput component correctly', function () {
    render(<DateInput {...defaultProps} />);
    const inputElement = screen.getByTestId('date-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('displays error message when there is an error', function () {
    const errorProps = {
      ...defaultProps,
      error: { message: 'Invalid date' },
    };

    render(<DateInput {...errorProps} />);
    const errorMessage = screen.getByText('Invalid date');
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not display error message when there is no error', function () {
    render(<DateInput {...defaultProps} />);
    const errorMessage = screen.queryByText('Invalid date');
    expect(errorMessage).toBeNull();
  });

  test('calls onChange function when value changes', function () {
    render(<DateInput {...defaultProps} />);
    const inputElement = screen.getByTestId('date-input');
    fireEvent.change(inputElement, { target: { value: '2024-12-05' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
