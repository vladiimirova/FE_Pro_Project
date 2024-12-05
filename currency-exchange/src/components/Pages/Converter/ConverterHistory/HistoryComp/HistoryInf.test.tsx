import { render, screen } from '@testing-library/react';
import HistoryInf from './HistoryInf'; 

describe('HistoryInf', () => {
  it('правильно рендерить пропси', () => {
    const testProps = {
      date: '2024-12-05',
      haveMoney: '1000',
      wantMoney: '38.7',
      fromCurrency: 'UAH',
      toCurrency: 'USD',
    };

    render(<HistoryInf {...testProps} />);

    // Перевіряємо, чи правильно відображається дата
    expect(screen.getByText('2024-12-05')).toBeInTheDocument();

    // Перевіряємо, чи правильно відображається сума та валюта "У мене є"
    expect(screen.getByText('1000 UAH')).toBeInTheDocument();

    // Перевіряємо, чи правильно відображається сума та валюта "Хочу придбати"
    expect(screen.getByText('38.7 USD')).toBeInTheDocument();

    // Перевіряємо, чи відображається іконка стрілки
    const arrowImage = screen.getByAltText('arrow-left');
    expect(arrowImage).toBeInTheDocument();
  });
});
