import { render, screen } from '@testing-library/react';
import Main from './Main';

jest.mock('./MainElements/MainLeftInf', function() {
  return { __esModule: true, default: function() { return <div>MainLeftInf</div>; } };
});

jest.mock('./MainElements/MainImg', function() {
  return { __esModule: true, default: function() { return <div>MainImg</div>; } };
});

describe('Компонент Main', function() {
  it('коректно рендерить компоненти MainLeftInf і MainImg', function() {
    render(<Main />);

    expect(screen.getByText('MainLeftInf')).toBeInTheDocument();
    expect(screen.getByText('MainImg')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
  });
});
