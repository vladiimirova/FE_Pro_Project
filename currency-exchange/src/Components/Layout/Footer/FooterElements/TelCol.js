function TelCol() {
  return (
    <div>
      <a href="tel:+88001112233" className="flex items-center gap-[17px]">
        <img src="./icons/tel.svg" className="tel" alt="tel" />
        <p className="text-black font-roboto font-medium text-[16px] hover:text-hover leading-140">
          8 800 111 22 33
        </p>
      </a>

      <p className="w-[150px] ml-[33px] text-gray font-roboto font-normal text-[12px]">
        Безкожтовно для дзвінків в межах України
      </p>
    </div>
  );
}

export default TelCol;
