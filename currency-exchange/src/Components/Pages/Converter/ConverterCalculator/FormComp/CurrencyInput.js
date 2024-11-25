import React from 'react';

function CurrencyInput({ id, label, register, error, currencies }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[20px] font-roboto text-gray font-medium mb-[30px]"
      >
        {label}
      </label>
      <div className="flex">
        <input
          id={id}
          type="text"
          placeholder="Введіть сумму грошей"
          {...register(`${id}`)}
          className={`w-[220px] h-[60px] border-[1px] border-solid ${
            error ? 'border-red-500' : 'border-gray-300'
          } text-[20px] font-roboto text-gray font-medium rounded-[4px] focus:outline-none focus:ring-2 ${
            error ? 'focus:ring-red-400' : 'focus:ring-blue-400'
          } text-center`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}

        <div className="relative ml-[15px] w-[120px]">
          <select
            {...register('currency')}
            className={`w-full pl-[18px] h-[60px] border-[1px] border-solid ${
              error ? 'border-red-500' : 'border-gray-300'
            } text-[20px] font-roboto text-gray font-medium rounded-[4px] focus:outline-none focus:ring-2 ${
              error ? 'focus:ring-red-400' : 'focus:ring-blue-400'
            } appearance-none`}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <span className="absolute right-[12px] top-[50%] transform -translate-y-1/2 pointer-events-none">
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
