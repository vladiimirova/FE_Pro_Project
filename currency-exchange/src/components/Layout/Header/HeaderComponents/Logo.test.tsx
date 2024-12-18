import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Logo';

test('Отображает логотип и текст', function() {
  render(
    <Router>
      <Logo />
    </Router>
  );
});

test('Ссылка ведет на главную страницу', function() {
  const { getByRole } = render(
    <Router>
      <Logo />
    </Router>
  );
  
  const link = getByRole('link');
  expect(link).toHaveAttribute('href', '/');
});
