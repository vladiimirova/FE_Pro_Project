import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import QuestionsForm from './QuestionsForm';

describe('Компонент QuestionsForm', function() {
  it('рендерить форму з полями та кнопкою', function() {
    render(<QuestionsForm />);

    expect(screen.getByLabelText(/ваше ім'я/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ваш email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ваше питання/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /надіслати питання/i })).toBeInTheDocument();
  });

  it('показує помилки при некоректному заповненні форми', function() {
    render(<QuestionsForm />);

    fireEvent.click(screen.getByRole('button', { name: /надіслати питання/i }));

    waitFor(function() {
      expect(screen.getByText(/ім'я має бути не менше 2 символів/i)).toBeInTheDocument();
      expect(screen.getByText(/невірний формат email/i)).toBeInTheDocument();
      expect(screen.getByText(/питання має бути не менше 10 символів/i)).toBeInTheDocument();
    });
  });

  it('успішно відправляє форму з правильними даними', function() {
    render(<QuestionsForm />);

    fireEvent.change(screen.getByLabelText(/ваше ім'я/i), {
      target: { value: 'Тетяна' },
    });
    fireEvent.change(screen.getByLabelText(/ваш email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/ваше питання/i), {
      target: { value: 'Як змінити email?' },
    });

    fireEvent.click(screen.getByRole('button', { name: /надіслати питання/i }));

    waitFor(function() {
      expect(screen.getByText(/ваше питання було успішно надіслано!/i)).toBeInTheDocument();
    });
  });
});
