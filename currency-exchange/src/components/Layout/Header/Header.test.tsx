import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('./HeaderComponents/Logo', function() {
  return { __esModule: true, default: function() { return <div>Logo</div>; } };
});
jest.mock('./HeaderComponents/Nav', function() {
  return { __esModule: true, default: function() { return <div>Nav</div>; } };
});
jest.mock('./HeaderComponents/Cabinet', function() {
  return { __esModule: true, default: function() { return <div>Cabinet</div>; } };
});

describe('Компонент Header', function() {
  it('коректно рендерить компоненти Logo, Nav, Cabinet', function() {
    render(<Header />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Nav')).toBeInTheDocument();
    expect(screen.getByText('Cabinet')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
