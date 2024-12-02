import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppCol from './AppCol';

describe('AppCol компонент', () => {
  test('Отображает все иконки социальных сетей', () => {
    render(
      <Router>
        <AppCol />
      </Router>
    );

    // Проверяем, что ссылки для соцсетей отображаются по href
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const youtubeLink = screen.getByRole('link', { name: /youtube/i });

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();
  });

  test('Ссылки ведут на правильные адреса', () => {
    render(
      <Router>
        <AppCol />
      </Router>
    );

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const youtubeLink = screen.getByRole('link', { name: /youtube/i });

    // Проверяем правильность атрибутов href
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com');
  });

  test('Иконки рендерятся с правильными стилями и размерами', () => {
    const { container } = render(
      <Router>
        <AppCol />
      </Router>
    );

    // Проверяем, что все иконки присутствуют
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(4);

    // Проверяем правильность классов и стилей
    icons.forEach(icon => {
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('text-2xl');
    });

    // Проверка классов родительских ссылок
    const links = container.querySelectorAll('a');
    links.forEach(link => {
      expect(link).toHaveClass('text-black');
      expect(link).toHaveClass('hover:text-hover');
    });
  });
});
