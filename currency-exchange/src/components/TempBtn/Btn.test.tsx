import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Btn from './Btn';

describe('Компонент Btn', function() {
  it('рендерить кнопку з посиланням на сторінку, якщо є to', function() {
    render(
      <BrowserRouter>
        <Btn text="Go Home" to="/converter" />
      </BrowserRouter>
    );

    const button = screen.getByText('Go Home');
    expect(button).toBeInTheDocument();

    const linkElement = button.closest('a');
    expect(linkElement).toHaveAttribute('href', '/converter');
  });

  it('рендерить кнопку без правильного посилання, якщо немає to', function() {
    render(
      <BrowserRouter>
        <Btn text="Click Me" />
      </BrowserRouter>
    );

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();

    const linkElement = button.closest('a');
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('викликає onClick, якщо є onClick, але немає to', function() {
    const handleClick = jest.fn();

    render(
      <BrowserRouter>
        <Btn text="Click Me" onClick={handleClick} />
      </BrowserRouter>
    );

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
