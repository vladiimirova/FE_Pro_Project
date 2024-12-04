import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', function() {
  test('Отображает все ссылки', function() {
    const { getByText } = render(
      <Router>
        <Nav />
      </Router>
    );

    const servicesLink = getByText('Послуги');
    const converterLink = getByText('Конвертер валют');
    const contactsLink = getByText('Контакти');
    const questionsLink = getByText('Задати питання');

    expect(servicesLink).toBeInTheDocument();
    expect(converterLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
    expect(questionsLink).toBeInTheDocument();
  });

  test('Ссылки ведут на правильные страницы', function() {
    const { getByRole } = render(
      <Router>
        <Nav />
      </Router>
    );

    const servicesLink = getByRole('link', { name: 'Послуги' });
    const converterLink = getByRole('link', { name: 'Конвертер валют' });
    const contactsLink = getByRole('link', { name: 'Контакти' });
    const questionsLink = getByRole('link', { name: 'Задати питання' });

    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(converterLink).toHaveAttribute('href', '/converter');
    expect(contactsLink).toHaveAttribute('href', '/contacts');
    expect(questionsLink).toHaveAttribute('href', '/questions');
  });
});
