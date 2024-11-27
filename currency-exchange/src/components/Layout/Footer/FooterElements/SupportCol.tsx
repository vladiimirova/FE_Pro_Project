function SupportCol(): JSX.Element {
  return (
    <div className=" ">
      <a href="tel:3773" className="flex items-center  gap-[19px]">
        <img src="./icons/phone.svg" className="phone" alt="phone" />
        <p className="text-black font-roboto font-medium text-[16px] hover:text-hover leading-140">
          3773
        </p>
      </a>

      <p className="text-gray font-roboto font-normal text-[12px] ml-[29px]">
        Цілодобова підтримка
      </p>
    </div>
  );
}

export default SupportCol;
