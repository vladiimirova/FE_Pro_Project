import React from 'react';
import { render, screen } from '@testing-library/react';
import CabinetTitle from './CabinetTitle';

describe('CabinetTitle component', function() {
  test('Отображает заголовок и описание', function() {
    render(<CabinetTitle />);

    expect(screen.getByText("Особистий кабінет")).toBeInTheDocument();
    expect(screen.getByText("Керуйте своїми даними та обліковим записом")).toBeInTheDocument();
  });

  test('Проверка правильных стилей заголовка и описания', function() {
    const { container } = render(<CabinetTitle />);

    const title = container.querySelector('h2');
    expect(title).toHaveClass('text-3xl');
    expect(title).toHaveClass('font-bold');

    const description = container.querySelector('p');
    expect(description).toHaveClass('text-lg');
  });
});

