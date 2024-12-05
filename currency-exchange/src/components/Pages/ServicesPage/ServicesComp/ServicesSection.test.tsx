import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection'; 

describe('ServicesSection', () => {
  it('правильно рендерить всі карточки послуг', () => {
    render(<ServicesSection />);

    // Перевіряємо, чи відображаються всі заголовки послуг
    expect(screen.getByText('Обмін валют')).toBeInTheDocument();
    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
    expect(screen.getByText('Консультації')).toBeInTheDocument();

    // Перевіряємо, чи відображається опис кожної послуги
    expect(screen.getByText('Швидкий та надійний обмін валют за вигідними курсами.')).toBeInTheDocument();
    expect(screen.getByText('Перевірка курсів валют у реальному часі та їх конвертація.')).toBeInTheDocument();
    expect(screen.getByText('Отримайте професійні поради щодо обміну валют та фінансових операцій.')).toBeInTheDocument();
  });

  it('правильно рендерить всі карточки з правильними класами для стилізації', () => {
    render(<ServicesSection />);

    // Перевіряємо, чи всі карточки мають правильні класи для стилізації
    const serviceCards = screen.getAllByText('Обмін валют');
    serviceCards.forEach((card) => {
      expect(card.closest('div')).toHaveClass('bg-white p-6 shadow-md flex-1 max-w-sm');
    });
  });
});
