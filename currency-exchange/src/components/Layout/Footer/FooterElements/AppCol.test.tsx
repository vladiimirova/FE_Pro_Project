import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppCol from './AppCol';

describe('AppCol компонент', function() {
  test('Отображает все иконки социальных сетей', function() {
    render(
      <Router>
        <AppCol />
      </Router>
    );

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const youtubeLink = screen.getByRole('link', { name: /youtube/i });

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();
  });

  test('Ссылки ведут на правильные адреса', function() {
    render(
      <Router>
        <AppCol />
      </Router>
    );

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const youtubeLink = screen.getByRole('link', { name: /youtube/i });

    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com');
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com');
  });

  test('Иконки рендерятся с правильными стилями и размерами', function() {
    const { container } = render(
      <Router>
        <AppCol />
      </Router>
    );

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(4);

    icons.forEach(function(icon) {
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('text-2xl');
    });

    const links = container.querySelectorAll('a');
    links.forEach(function(link) {
      expect(link).toHaveClass('text-black');
      expect(link).toHaveClass('hover:text-hover');
    });
  });
});