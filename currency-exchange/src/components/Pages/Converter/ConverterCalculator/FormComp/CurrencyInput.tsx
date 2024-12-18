import { CurrencyInputProps } from '../../../../Interfaces/Interfaces';

function CurrencyInput({
  id,
  currencyId,
  label,
  register,
  error,
  currencies,
  currencyValue,
  placeholder,
  onChange,
  onChangeCurrency,
  value,
}: CurrencyInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[20px] font-roboto text-gray font-medium mb-[30px]"
      >
        {label}
      </label>
      <div className="flex">
        <div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            {...register(id)}
            className={`w-[220px] h-[60px] border-[1px] border-solid ${
              error?.[id] ? 'border-red-500' : 'border-gray-300'
            } text-[20px] font-roboto text-gray font-medium rounded-[4px] focus:outline-none focus:ring-2 ${
              error?.[id] ? 'focus:ring-red-400' : 'focus:ring-blue-400'
            } text-center`}
            onChange={onChange}
            value={value}
          />
          <div className="text-red-500 text-sm mt-1 h-[28px]">
            {error?.[id]?.message}
          </div>
        </div>

        <div className="relative ml-[15px] w-[120px]">
          <select
            {...register(currencyId)}
            value={currencyValue}
            className={`w-full pl-[18px] h-[60px] border-[1px] border-solid ${
              error?.[currencyId] ? 'border-red-500' : 'border-gray-300'
            } text-[20px] font-roboto text-gray font-medium rounded-[4px] focus:outline-none focus:ring-2 ${
              error?.[currencyId] ? 'focus:ring-red-400' : 'focus:ring-blue-400'
            } appearance-none`}
            onChange={onChangeCurrency}
          >
            {currencies.map(function (currency) {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
          <span className="absolute right-[15px] top-[30px] transform -translate-y-1/2 pointer-events-none">
            <img
              src="./icons/down-arrow.svg"
              alt="arrow"
              className="w-[20px] h-[20px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyInput;
