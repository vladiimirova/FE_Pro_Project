import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLeftInf from './MainLeftInf';

describe('MainLeftInf component', () => {
  const renderWithRouter = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

  test('Отображает заголовок и текст правильно', () => {
    renderWithRouter(<MainLeftInf />);

    const heading = screen.getByText(/конвертер валют/i);
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/переважна діяльність банківської групи/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Кнопка рендерится с правильным текстом и ссылкой', () => {
    renderWithRouter(<MainLeftInf />);

    const button = screen.getByRole('link', { name: /конвертувати валюту/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/converter');
  });

  test('Кнопка имеет правильные классы стилей', () => {
    renderWithRouter(<MainLeftInf />);

    const button = screen.getByRole('link', { name: /конвертувати валюту/i });
    expect(button).toHaveClass('text-custom-light-blue');
    expect(button).toHaveClass('bg-[#2C36F2]');
    expect(button).toHaveClass('hover:bg-[#1E90FF]');
  });
});
