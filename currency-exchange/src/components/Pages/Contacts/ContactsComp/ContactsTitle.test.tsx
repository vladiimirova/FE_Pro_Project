import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsTitle from './ContactsTitle'; 

describe('ContactsTitle component', () => {
  test('Отображает заголовок "Контакти" с правильным стилем', () => {
    render(<ContactsTitle />);

    const title = screen.getByText(/Контакти/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-4xl');
    expect(title).toHaveClass('font-bold');
  });

  test('Отображает описание "Зв\'яжіться з нами для додаткової інформації"', () => {
    render(<ContactsTitle />);

    const description = screen.getByText(/Зв'яжіться з нами для додаткової інформації/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-lg');
  });

  test('Проверка правильных стилей контейнера', () => {
    const { container } = render(<ContactsTitle />);

    // Проверяем, что контейнер имеет правильные стили
    const containerDiv = container.querySelector('div.container');
    expect(containerDiv).toHaveClass('container');
  });
});
