import React from 'react';
import { render, screen } from '@testing-library/react';
import MainImg from './MainImg';

describe('MainImg component', function () {
  test('Отображает изображение с правильным src и alt атрибутами', function () {
    render(<MainImg />);

    const img = screen.getByAltText(/main-photo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', './img/main-photo.jpg');
    expect(img).toHaveAttribute('alt', 'main-photo');
  });

  test('Проверка наличия правильного класса изображения', function () {
    render(<MainImg />);

    const img = screen.getByAltText(/main-photo/i);
    expect(img).toHaveClass('main-photo');
  });
});
