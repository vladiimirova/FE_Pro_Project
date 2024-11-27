import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cabinet from './Cabinet';

describe('Cabinet component', () => {
  test('Отображает иконку и текст', () => {
    const { getByText, getByAltText }: RenderResult = render(
      <Router>
        <Cabinet />
      </Router>
    );

    const image = getByAltText('door');
    expect(image).toBeInTheDocument();

    const text = getByText('Особистий кабінет');
    expect(text).toBeInTheDocument();
  });

  test('Ссылка ведет на /cabinet', () => {
    const { getByRole }: RenderResult = render(
      <Router>
        <Cabinet />
      </Router>
    );

    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/cabinet');
  });
});