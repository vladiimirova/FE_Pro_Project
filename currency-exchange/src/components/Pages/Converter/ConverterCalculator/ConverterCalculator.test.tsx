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

  it('renders correctly', function () {
    mockUseConverterStore();

    render(<ConverterCalculator addToHistory={jest.fn()} />);

    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
  });
});
