import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import CardLeftInf from './CardLeftInf';

describe('CardLeftInf', () => {
  test('Отображает заголовок и текст', () => {
    render(
      <Router>
        <CardLeftInf />
      </Router>
    );

    const headerElement = screen.getByText(/Чіп Чендж/i);
    expect(headerElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/Обмінник валют - навчальний/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('Кнопка ведет на /converter', () => {
    render(
      <Router>
        <CardLeftInf />
      </Router>
    );

    const button = screen.getByRole('link', { name: /Конвертер валют/i });
    expect(button).toHaveAttribute('href', '/converter');
  });
});
