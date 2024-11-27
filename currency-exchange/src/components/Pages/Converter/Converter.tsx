import ConverterCalculator from './ConverterCalculator/ConverterCalculator';
import ConverterHistory from './ConverterHistory/ConverterHistory';

function Converter(): JSX.Element {
  return (
    <div>
      <ConverterCalculator />
      <ConverterHistory />
    </div>
  );
}

export default Converter;
