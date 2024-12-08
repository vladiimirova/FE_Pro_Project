import { render, screen } from '@testing-library/react';
import Contacts from './Contacts';

jest.mock('./ContactsComp/ContactsTitle', function() {
  return { __esModule: true, default: function() { return <div>ContactsTitle</div>; } };
});

jest.mock('./ContactsComp/ContactsInf', function() {
  return { __esModule: true, default: function() { return <div>ContactsInf</div>; } };
});

describe('Компонент Contacts', function() {
  it('коректно рендерить компоненти ContactsTitle і ContactsInf', function() {
    render(<Contacts />);

    expect(screen.getByText('ContactsTitle')).toBeInTheDocument();
    expect(screen.getByText('ContactsInf')).toBeInTheDocument();
  });

  it('рендериться без помилок', function() {
    const { container } = render(<Contacts />);
    expect(container).toBeInTheDocument();
  });
});
