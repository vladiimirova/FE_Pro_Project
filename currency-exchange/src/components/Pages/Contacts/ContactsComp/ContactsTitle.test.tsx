import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsTitle from './ContactsTitle';

describe('ContactsTitle component', function() {
  test('Отображает заголовок "Контакти" с правильным стилем', function() {
    render(<ContactsTitle />);

    const title = screen.getByText(/Контакти/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-4xl');
    expect(title).toHaveClass('font-bold');
  });

  test('Отображает описание "Зв\'яжіться з нами для додаткової інформації"', function() {
    render(<ContactsTitle />);

    const description = screen.getByText(/Зв'яжіться з нами для додаткової інформації/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-lg');
  });

  test('Проверка правильных стилей контейнера', function() {
    const { container } = render(<ContactsTitle />);

    const containerDiv = container.querySelector('div.container');
    expect(containerDiv).toHaveClass('container');
  });
});
