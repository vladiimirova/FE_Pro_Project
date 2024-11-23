import ConverterCalculator from "./ConverterSections/ConverterCalculator.js";
import ConverterHistory from "./ConverterSections/ConverterHistory.js";

function Converter() {
  return (
    <div>
      <ConverterCalculator />
      <ConverterHistory />
    </div>
  );
}

export default Converter;
