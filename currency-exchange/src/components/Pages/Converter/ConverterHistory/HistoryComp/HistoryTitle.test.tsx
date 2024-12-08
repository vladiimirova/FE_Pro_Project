import { render, screen, fireEvent } from '@testing-library/react';
import HistoryTitle from './HistoryTitle';
import { MemoryRouter } from 'react-router-dom';

describe('HistoryTitle', function () {
  it('renders correctly and triggers onClear when button is clicked', function () {
    const onClearMock = jest.fn();
    const testProps = {
      onClear: onClearMock,
    };

    render(
      <MemoryRouter>
        <HistoryTitle {...testProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Історія конвертації')).toBeInTheDocument();
    expect(screen.getByText('Очистити історію')).toBeInTheDocument();

    const button = screen.getByText('Очистити історію');
    fireEvent.click(button);

    expect(onClearMock).toHaveBeenCalled();
  });
});
