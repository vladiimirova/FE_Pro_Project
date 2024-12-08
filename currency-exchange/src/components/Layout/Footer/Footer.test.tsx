import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('./FooterElements/AdressCol', function() {
  return { __esModule: true, default: function() { return <div>AdressCol</div>; } };
});
jest.mock('./FooterElements/InfCol', function() {
  return { __esModule: true, default: function() { return <div>InfCol</div>; } };
});
jest.mock('./FooterElements/SupportCol', function() {
  return { __esModule: true, default: function() { return <div>SupportCol</div>; } };
});
jest.mock('./FooterElements/TelCol', function() {
  return { __esModule: true, default: function() { return <div>TelCol</div>; } };
});
jest.mock('./FooterElements/AppCol', function() {
  return { __esModule: true, default: function() { return <div>AppCol</div>; } };
});

describe('Компонент Footer', function() {
  it('коректно рендерить компоненти AdressCol, InfCol, SupportCol, TelCol, AppCol', function() {
    render(<Footer />);

    expect(screen.getByText('AdressCol')).toBeInTheDocument();
    expect(screen.getByText('InfCol')).toBeInTheDocument();
    expect(screen.getByText('SupportCol')).toBeInTheDocument();
    expect(screen.getByText('TelCol')).toBeInTheDocument();
    expect(screen.getByText('AppCol')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
