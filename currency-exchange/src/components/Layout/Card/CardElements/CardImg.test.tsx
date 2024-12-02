import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImg from './CardImg';

describe('CardImg', () => {
  test('Отображает изображение с правильным атрибутом src', () => {
    render(<CardImg />);

    const imageElement = screen.getByAltText('mastercard-card');
    expect(imageElement).toBeInTheDocument();

    // Проверяем атрибут src, а не public
    expect(imageElement).toHaveAttribute('src', './img/standard-mastercard-card.png');
  });
});
