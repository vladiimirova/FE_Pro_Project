import React from 'react';
import { render } from '@testing-library/react';
import SupportCol from './SupportCol'; 

describe('SupportCol component', () => {
  test('Отображает телефон с правильной иконкой и текстом', () => {
    const { getByText, getByAltText } = render(<SupportCol />);

    const phoneIcon = getByAltText('phone');
    expect(phoneIcon).toBeInTheDocument();

    const phoneNumber = getByText('3773');
    expect(phoneNumber).toBeInTheDocument();
  });

  test('Телефонная ссылка работает корректно', () => {
    const { getByText } = render(<SupportCol />);

    const phoneLink = getByText('3773').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:3773');
  });

  test('Текст о круглосуточной поддержке отображается правильно', () => {
    const { getByText } = render(<SupportCol />);

    const supportText = getByText(/Цілодобова підтримка/i);
    expect(supportText).toBeInTheDocument();
  });

  test('Все элементы имеют правильные стили', () => {
    const { container } = render(<SupportCol />);

    const phoneLink = container.querySelector('a');
    const phoneText = container.querySelector('p');
    
    expect(phoneLink).toHaveClass('flex');
    expect(phoneText).toHaveClass('text-black');
    expect(phoneText).toHaveClass('font-roboto');
    expect(phoneText).toHaveClass('font-medium');
    expect(phoneText).toHaveClass('text-[16px]');
    expect(phoneText).toHaveClass('hover:text-hover');
  });
});
