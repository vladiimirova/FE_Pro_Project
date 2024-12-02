import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsInf from './ContactsInf'; 

describe('ContactsInf component', () => {
  test('Отображает адрес с правильной ссылкой на карту', () => {
    render(<ContactsInf />);

    const addressLink = screen.getByText(/м. Київ, вул. Центральна, 123/i);
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute('href', 'https://www.google.com.ua/maps/place/вулиця+Центральна,+123,+Київська+область/@50.3106228,30.6641123,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4c102b0a7592b:0xc35eb418269aa358!8m2!3d50.3106194!4d30.6666872?hl=ru&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D');
  });

  test('Отображает телефон с правильной ссылкой для звонка', () => {
    render(<ContactsInf />);

    const phoneLink = screen.getByText('+380 (12) 345-67-89');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+380123456789');
  });

  test('Отображает email с правильной ссылкой для отправки почты', () => {
    render(<ContactsInf />);

    const emailLink = screen.getByText('info@chipchange.ua');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:info@chipchange.ua');
  });

  test('Проверка правильных стилей и заголовков', () => {
    const { container } = render(<ContactsInf />);

    // Проверяем, что заголовки имеют правильный стиль
    const addressTitle = container.querySelectorAll('h3')[0];
    expect(addressTitle).toHaveClass('text-xl');
    expect(addressTitle).toHaveClass('font-roboto');
    expect(addressTitle).toHaveClass('font-bold');

    const phoneTitle = container.querySelectorAll('h3')[1];
    expect(phoneTitle).toHaveClass('text-xl');
    expect(phoneTitle).toHaveClass('font-roboto');
    expect(phoneTitle).toHaveClass('font-bold');

    const emailTitle = container.querySelectorAll('h3')[2];
    expect(emailTitle).toHaveClass('text-xl');
    expect(emailTitle).toHaveClass('font-semibold');
  });
});
