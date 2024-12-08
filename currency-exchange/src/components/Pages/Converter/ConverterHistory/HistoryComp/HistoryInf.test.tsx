import { render, screen } from '@testing-library/react';
import HistoryInf from './HistoryInf'; 

describe('HistoryInf', function () {
  it('правильно рендерить пропси', function () {
    const testProps = {
      date: '2024-12-05',
      haveMoney: '1000',
      wantMoney: '38.7',
      fromCurrency: 'UAH',
      toCurrency: 'USD',
    };

    render(<HistoryInf {...testProps} />);

    expect(screen.getByText('2024-12-05')).toBeInTheDocument();
    expect(screen.getByText('1000 UAH')).toBeInTheDocument();
    expect(screen.getByText('38.7 USD')).toBeInTheDocument();

    const arrowImage = screen.getByAltText('arrow-left');
    expect(arrowImage).toBeInTheDocument();
  });
});
