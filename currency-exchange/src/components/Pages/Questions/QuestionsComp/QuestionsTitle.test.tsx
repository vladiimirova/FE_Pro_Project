import { render, screen } from '@testing-library/react';
import QuestionsTitle from './QuestionsTitle';

describe('Компонент QuestionsTitle', function() {
  it('рендерить заголовок та підзаголовок', function() {
    render(<QuestionsTitle />);

    expect(screen.getByText(/задати питання/i)).toBeInTheDocument();
    expect(screen.getByText(/ми завжди раді допомогти вам з вашими запитаннями/i)).toBeInTheDocument();
  });

  it('перевірка класів стилів', function() {
    render(<QuestionsTitle />);

    const header = screen.getByText(/задати питання/i).closest('h2');
    expect(header).toHaveClass('text-3xl');
    expect(header).toHaveClass('font-bold');
    expect(header).toHaveClass('mb-2');

    const paragraph = screen.getByText(/ми завжди раді допомогти вам з вашими запитаннями/i);
    expect(paragraph).toBeInTheDocument();
  });
});
