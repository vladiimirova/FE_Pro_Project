import { render, screen } from '@testing-library/react';
import Services from './Services';

jest.mock('./ServicesComp/ServicesTitle', function() {
  return { __esModule: true, default: function() { return <div>ServiceTitle</div>; } };
});

jest.mock('./ServicesComp/ServicesSection', function() {
  return { __esModule: true, default: function() { return <div>ServicesSection</div>; } };
});

describe('Services', function() {
  it('повинно рендерити заголовок і секцію послуг', function() {
    render(<Services />);
    
    expect(screen.getByText('ServiceTitle')).toBeInTheDocument();
    expect(screen.getByText('ServicesSection')).toBeInTheDocument();
  });
});
