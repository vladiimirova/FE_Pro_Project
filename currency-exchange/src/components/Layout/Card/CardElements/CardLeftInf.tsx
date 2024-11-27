import React from 'react';
import Btn from '../../../TempBtn/Btn';

function CardLeftInf(): JSX.Element {
  return (
    <div>
      <h1 className="font-roboto font-bold text-custom-light-blue text-[54px] leading-none">
        Чіп Чендж
      </h1>
      <p className="font-roboto font-medium text-gray-light text-[20px] leading-none mt-[25px]">
        Обмінник валют - навчальний
      </p>

      <Btn
        className={'text-gray bg-[#F6F7FF] hover:text-hover'}
        to={'/converter'}
        text={'Конвертер валют'}
      />
    </div>
  );
}

export default CardLeftInf;
