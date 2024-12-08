import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection'; 

describe('ServicesSection', function() {
  it('правильно рендерить всі карточки послуг', function() {
    render(<ServicesSection />);

    expect(screen.getByText('Обмін валют')).toBeInTheDocument();
    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
    expect(screen.getByText('Консультації')).toBeInTheDocument();

    expect(screen.getByText('Швидкий та надійний обмін валют за вигідними курсами.')).toBeInTheDocument();
    expect(screen.getByText('Перевірка курсів валют у реальному часі та їх конвертація.')).toBeInTheDocument();
    expect(screen.getByText('Отримайте професійні поради щодо обміну валют та фінансових операцій.')).toBeInTheDocument();
  });

  it('правильно рендерить всі карточки з правильними класами для стилізації', function() {
    render(<ServicesSection />);

    const serviceCards = screen.getAllByText('Обмін валют');
    serviceCards.forEach(function(card) {
      expect(card.closest('div')).toHaveClass('bg-white p-6 shadow-md flex-1 max-w-sm');
    });
  });
});
