import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdressCol from './AdressCol';

describe('AdressCol component', function() {
  test('Отображает логотип и текст "Чіп Чендж"', function() {
    const { getByAltText, getByText } = render(
      <Router>
        <AdressCol />
      </Router>
    );

    const logo = getByAltText('header-logo');
    expect(logo).toBeInTheDocument();

    const text = getByText('Чіп Чендж');
    expect(text).toBeInTheDocument();
  });

  test('Ссылка ведет на /', function() {
    const { getByRole } = render(
      <Router>
        <AdressCol />
      </Router>
    );

    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  test('Отображает адрес и информацию о лицензии', function() {
    const { getByText } = render(
      <Router>
        <AdressCol />
      </Router>
    );

    const addressText = getByText(/04128, м\.Київ, вул\. Хрещатик, 19/);
    const licenseText = getByText(/Ліцензія НБУ №156/i);  
    const copyrightText = getByText(/Ⓒ\s*ПАТ ЧіпЧендж, 2019-2023/i);  

    expect(addressText).toBeInTheDocument();
    expect(licenseText).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });
});
