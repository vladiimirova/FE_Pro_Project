import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { twMerge } from "tailwind-merge";

function Btn({ className, to, text, onClick }) {
  function onClickHendler(evt) {
    if (onClick) {
      evt.preventDefault();
      onClick();
    }
  }
  return (
    <Link
      to={onClick ? "" : to}
      onClick={onClickHendler}
      className={twMerge(
        cx(
          "font-roboto font-medium font-normal text-[16px] rounded-[4px] w-[234px] h-[53px] inline-flex items-center justify-center text-center mt-[29px]"
        ),
        className
      )}
    >
      {text}
    </Link>
  );
}

export default Btn;
