import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', function () {
  test('Отображает текст 404 и сообщение о том, что страница не найдена', function () {
    render(<NotFound />);

    const heading = screen.getByText('404');
    expect(heading).toBeInTheDocument();

    const notFoundMessage = screen.getByText(/Сторінку не знайдено/i);
    expect(notFoundMessage).toBeInTheDocument();

    const suggestionMessage = screen.getByText(
      /Можливо, вона була видалена або ви ввели неправильний URL./i
    );
    expect(suggestionMessage).toBeInTheDocument();
  });

  test('Ссылка на главную страницу рендерится корректно', function () {
    render(<NotFound />);

    const link = screen.getByRole('link', { name: /Повернутись на головну/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  test('Проверка стилей и классов', function () {
    render(<NotFound />);

    const heading = screen.getByText('404');
    expect(heading).toHaveClass('text-9xl');
    expect(heading).toHaveClass('font-extrabold');
    expect(heading).toHaveClass('text-blue-500');

    const link = screen.getByRole('link', { name: /Повернутись на головну/i });
    expect(link).toHaveClass('mt-6');
    expect(link).toHaveClass('px-6');
    expect(link).toHaveClass('py-3');
    expect(link).toHaveClass('bg-blue-500');
    expect(link).toHaveClass('hover:bg-blue-600');
  });
});
