import React from 'react';
import { render, screen } from '@testing-library/react';
import MainImg from './MainImg'; 

describe('MainImg component', () => {
  test('Отображает изображение с правильным src и alt атрибутами', () => {
    render(<MainImg />);

    const img = screen.getByAltText(/main-photo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', './img/main-photo.jpg');
    expect(img).toHaveAttribute('alt', 'main-photo');
  });

  test('Проверка наличия правильного класса изображения', () => {
    render(<MainImg />);

    const img = screen.getByAltText(/main-photo/i);
    expect(img).toHaveClass('main-photo');
  });
});
