import { render, screen } from '@testing-library/react';
import Converter from './Converter';
import { jest } from '@jest/globals';

jest.mock('./ConverterCalculator/ConverterCalculator', function () {
  return {
    __esModule: true,
    default: function () {
      return <div>ConverterCalculator</div>;
    },
  };
});

jest.mock('./ConverterHistory/ConverterHistory', function () {
  return {
    __esModule: true,
    default: function () {
      return <div>ConverterHistory</div>;
    },
  };
});

describe('Компонент Converter', function () {
  it('коректно рендерить компоненти ConverterCalculator і ConverterHistory', function () {
    render(<Converter />);

    expect(screen.getByText('ConverterCalculator')).toBeInTheDocument();
    expect(screen.getByText('ConverterHistory')).toBeInTheDocument();
  });

  it('рендериться без помилок', function () {
    const { container } = render(<Converter />);
    expect(container).toBeInTheDocument();
  });
});
