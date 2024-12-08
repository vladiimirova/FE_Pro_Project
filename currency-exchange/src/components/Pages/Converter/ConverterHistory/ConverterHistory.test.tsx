import { render, screen, fireEvent } from '@testing-library/react';
import ConverterHistory from './ConverterHistory';
import { MemoryRouter } from 'react-router-dom'; 

describe('ConverterHistory', function () {
  it('renders correctly and displays history items', function () {
    const onClearMock = jest.fn();

    const mockHistory = [
      {
        date: '2024-12-05',
        haveMoney: '1000',
        wantMoney: '38.7',
        fromCurrency: 'UAH',
        toCurrency: 'USD',
      },
      {
        date: '2024-12-06',
        haveMoney: '500',
        wantMoney: '20',
        fromCurrency: 'EUR',
        toCurrency: 'GBP',
      },
    ];

    render(
      <MemoryRouter>
        <ConverterHistory history={mockHistory} onClear={onClearMock} />
      </MemoryRouter>
    );

    expect(screen.getByText('Історія конвертації')).toBeInTheDocument();

    mockHistory.forEach(function (item) {
      expect(screen.getByText(item.date)).toBeInTheDocument();
      expect(screen.getByText(item.haveMoney + ' ' + item.fromCurrency)).toBeInTheDocument();
      expect(screen.getByText(item.wantMoney + ' ' + item.toCurrency)).toBeInTheDocument();
    });

    const button = screen.getByText('Очистити історію');
    fireEvent.click(button);

    expect(onClearMock).toHaveBeenCalled();
  });
});
