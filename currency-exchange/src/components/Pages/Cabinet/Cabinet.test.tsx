import { render, screen } from '@testing-library/react';
import Cabinet from './Cabinet';

jest.mock('./CabinetComp/CabinetTitle', function() {
  return { __esModule: true, default: function() { return <div>CabinetTitle</div>; } };
});
jest.mock('./CabinetComp/CabinetInf', function() {
  return { __esModule: true, default: function() { return <div>CabinetInf</div>; } };
});

describe('Компонент Cabinet', function() {
  it('коректно рендерить компоненти CabinetTitle і CabinetInf', function() {
    render(<Cabinet />);

    expect(screen.getByText('CabinetTitle')).toBeInTheDocument();
    expect(screen.getByText('CabinetInf')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Cabinet />);
    expect(container).toBeInTheDocument();
  });
});
