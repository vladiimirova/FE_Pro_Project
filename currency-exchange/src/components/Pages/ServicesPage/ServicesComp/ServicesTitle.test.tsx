import { render, screen } from '@testing-library/react';
import ServiceTitle from './ServicesTitle';

describe('ServiceTitle', () => {
  it('повинно відображати заголовок "Наші Послуги"', () => {
    render(<ServiceTitle />);
    
    // Перевіряємо наявність заголовка
    const heading = screen.getByText(/Наші Послуги/i);
    expect(heading).toBeInTheDocument();
  });

  it('повинно відображати підзаголовок "Дізнайтеся більше про наші пропозиції та можливості"', () => {
    render(<ServiceTitle />);
    
    // Перевіряємо наявність підзаголовка
    const subheading = screen.getByText(/Дізнайтеся більше про наші пропозиції та можливості/i);
    expect(subheading).toBeInTheDocument();
  });

  it('повинно мати правильний клас для контейнера', () => {
    render(<ServiceTitle />);
    
    // Перевіряємо наявність класу контейнера
    const container = screen.getByText(/Наші Послуги/i).closest('div');
    expect(container).toHaveClass('container');
  });
});
