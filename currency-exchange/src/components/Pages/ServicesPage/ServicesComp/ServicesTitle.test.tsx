import { render, screen } from '@testing-library/react';
import ServiceTitle from './ServicesTitle';

describe('ServiceTitle', function() {
  it('повинно відображати заголовок "Наші Послуги"', function() {
    render(<ServiceTitle />);
    
    const heading = screen.getByText(/Наші Послуги/i);
    expect(heading).toBeInTheDocument();
  });

  it('повинно відображати підзаголовок "Дізнайтеся більше про наші пропозиції та можливості"', function() {
    render(<ServiceTitle />);
    
    const subheading = screen.getByText(/Дізнайтеся більше про наші пропозиції та можливості/i);
    expect(subheading).toBeInTheDocument();
  });

  it('повинно мати правильний клас для контейнера', function() {
    render(<ServiceTitle />);
    
    const container = screen.getByText(/Наші Послуги/i).closest('div');
    expect(container).toHaveClass('container');
  });
});
