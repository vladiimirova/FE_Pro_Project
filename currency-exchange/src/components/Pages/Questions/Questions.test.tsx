import { render, screen } from '@testing-library/react';
import Questions from './Questions';

jest.mock('./QuestionsComp/QuestionsTitle', function() {
  return { __esModule: true, default: function() { return <div>QuestionsTitle</div>; } };
});
jest.mock('./QuestionsComp/QuestionsForm', function() {
  return { __esModule: true, default: function() { return <div>QuestionsForm</div>; } };
});

describe('Компонент Questions', function() {
  it('правильно рендерить підкомпоненти', function() {
    render(<Questions />);

    expect(screen.getByText('QuestionsTitle')).toBeInTheDocument();
    expect(screen.getByText('QuestionsForm')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Questions />);
    expect(container).toBeInTheDocument();
  });
});
