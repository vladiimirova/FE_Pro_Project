import React from 'react';
import { Link } from 'react-router-dom';

function InfCol() {
  return (
    <div>
      <ul className="flex flex-col gap-3.5">
        <li>
          <Link
            to="/"
            className="text-gray font-roboto font-medium text-[16px]  hover:text-hover leading-140"
          >
            Послуги
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-gray font-roboto font-medium text-[16px] hover:text-hover leading-140"
          >
            Конвертер валют
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="text-gray font-roboto font-medium text-[16px] hover:text-hover leading-140"
          >
            Контакти
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-gray font-roboto font-medium text-[16px] hover:text-hover leading-140"
          >
            Задати питання
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default InfCol;
