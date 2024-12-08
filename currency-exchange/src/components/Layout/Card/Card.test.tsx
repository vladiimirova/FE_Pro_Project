import { render, screen } from '@testing-library/react';
import Card from './Card';

jest.mock('./CardElements/CardLeftInf', function() {
    return { __esModule: true, default: function() { return <div>CardLeftInf</div>; } };
  });
  jest.mock('./CardElements/CardImg', function() {
    return { __esModule: true, default: function() { return <div>CardImg</div>; } };
  });
  
describe('Компонент Card', function() {
  it('коректно рендерить компоненти CardLeftInf і CardImg', function() {
    render(<Card />);

    expect(screen.getByText('CardLeftInf')).toBeInTheDocument();
    expect(screen.getByText('CardImg')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });
});
