import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { BtnProps } from '../Interfaces/Interfaces';

function Btn({ className, to = '/', text, onClick }:BtnProps) : JSX.Element {
  function onClickHandler(evt: React.MouseEvent<HTMLAnchorElement>): void {
    if (onClick) {
      evt.preventDefault(); 
      onClick(); 
    }
  }
  return (
    <Link
      to={onClick ? '' : to} 
      onClick={onClickHandler}
      className={twMerge(
        cx(
          'font-roboto font-medium font-normal text-[18px] rounded-[4px] w-[234px] h-[53px] inline-flex items-center justify-center text-center mt-[29px]'
        ),
        className
      )}
    >
      {text}
    </Link>
  );
}

export default Btn;
