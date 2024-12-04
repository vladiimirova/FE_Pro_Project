import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import InfCol from './InfCol';

describe('InfCol компонент', function() {
  test('Отображает все ссылки с правильными текстами', function() {
    const { getByText } = render(
      <Router>
        <InfCol />
      </Router>
    );

    expect(getByText(/Послуги/i)).toBeInTheDocument();
    expect(getByText(/Конвертер валют/i)).toBeInTheDocument();
    expect(getByText(/Контакти/i)).toBeInTheDocument();
    expect(getByText(/Задати питання/i)).toBeInTheDocument();
  });

  test('Ссылки ведут на правильные адреса', function() {
    const { getByText } = render(
      <Router>
        <InfCol />
      </Router>
    );

    const serviceLink = getByText(/Послуги/i);
    const converterLink = getByText(/Конвертер валют/i);
    const contactsLink = getByText(/Контакти/i);
    const questionLink = getByText(/Задати питання/i);

    expect(serviceLink.closest('a')).toHaveAttribute('href', '/');
    expect(converterLink.closest('a')).toHaveAttribute('href', '/');
    expect(contactsLink.closest('a')).toHaveAttribute('href', '/');
    expect(questionLink.closest('a')).toHaveAttribute('href', '/');
  });

  test('Все ссылки имеют правильные стили', function() {
    const { container } = render(
      <Router>
        <InfCol />
      </Router>
    );

    const links = container.querySelectorAll('a');
    links.forEach(function(link) {
      expect(link).toHaveClass('text-gray');
      expect(link).toHaveClass('font-roboto');
      expect(link).toHaveClass('font-medium');
      expect(link).toHaveClass('text-[16px]');
      expect(link).toHaveClass('hover:text-hover');
    });
  });
});
