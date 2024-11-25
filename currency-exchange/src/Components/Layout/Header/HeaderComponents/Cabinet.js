import React from 'react';
import { Link } from 'react-router-dom';

function Cabinet() {
  return (
    <div>
      <Link
        to="/cabinet"
        className="flex justify-center items-center mr-[27px] gap-[15px]"
      >
        <img src="./icons/door.svg" className="door" alt="door" />
        <p className="text-black font-roboto font-normal text-[16px] hover:text-hover">
          Особистий кабінет
        </p>
      </Link>
    </div>
  );
}

export default Cabinet;
