import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImg from './CardImg';

describe('CardImg', function() {
  test('Отображает изображение с правильным атрибутом src', function() {
    render(<CardImg />);

    const imageElement = screen.getByAltText('mastercard-card');
    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute('src', './img/standard-mastercard-card.png');
  });
});
