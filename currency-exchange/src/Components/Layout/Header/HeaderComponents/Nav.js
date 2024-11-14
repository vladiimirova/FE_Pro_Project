import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-[38px]">
        <li>
          <Link to="/" className="text-gray-nav font-roboto font-normal text-[16px]  hover:text-hover">Послуги</Link> 
        </li>
        <li>
          <Link to="/" className="text-gray-nav font-roboto font-normal text-[16px] hover:text-hover">Конвертер валют</Link> 
        </li>

        <li>
          <Link to="/" className="text-gray-nav font-roboto font-normal text-[16px] hover:text-hover">Контакти</Link>
        </li>
        <li>
          <Link to="/" className="text-gray-nav font-roboto font-normal text-[16px] hover:text-hover">Задати питання</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
