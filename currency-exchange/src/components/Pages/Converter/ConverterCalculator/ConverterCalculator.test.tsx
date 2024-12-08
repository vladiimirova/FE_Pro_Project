import React from 'react';
import { render, screen } from '@testing-library/react';
import ConverterCalculator from './ConverterCalculator';
import { useConverterStore } from '../../../Store/Store';

jest.mock('../../../Store/Store', function () {
  return {
    useConverterStore: jest.fn(),
  };
});

describe('ConverterCalculator', function () {
  function mockUseConverterStore() {
    const mockStoreState = {
      currencyFrom: 'USD',
      currencyTo: 'EUR',
      fromValue: '',
      toValue: '',
      exchangeRate: 1.0,
      selectedDate: new Date(),
      fromError: '',
      toError: '',
      setCurrencyFrom: jest.fn(),
      setCurrencyTo: jest.fn(),
      setFromValue: jest.fn(),
      setToValue: jest.fn(),
      setExchangeRate: jest.fn(),
      setSelectedDate: jest.fn(),
      setFromError: jest.fn(),
      setToError: jest.fn(),
    };

    (useConverterStore as unknown as jest.Mock).mockReturnValue(mockStoreState);
  }

  it('коректно рендерить без введених значень', function () {
    mockUseConverterStore();
    render(<ConverterCalculator addToHistory={jest.fn()} />);
    
    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введіть суму')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Результат конверсії')).toBeInTheDocument();
    expect(screen.getByLabelText('В мене є:')).toBeInTheDocument();
    expect(screen.getByLabelText('Хочу придбати:')).toBeInTheDocument();
  });

  it('коректно рендерить без виклику відправки форми', function () {
    mockUseConverterStore();
    const addToHistoryMock = jest.fn();
    render(<ConverterCalculator addToHistory={addToHistoryMock} />);
    
    expect(addToHistoryMock).not.toHaveBeenCalled();
  });

  it('не змінює значення, якщо не введено дані', function () {
    mockUseConverterStore();
    render(<ConverterCalculator addToHistory={jest.fn()} />);
    
    const fromInput = screen.getByPlaceholderText('Введіть суму') as HTMLInputElement;
    const toInput = screen.getByPlaceholderText('Результат конверсії') as HTMLInputElement;
    
    expect(fromInput).toHaveValue('');
    expect(toInput).toHaveValue('');
  });
});
