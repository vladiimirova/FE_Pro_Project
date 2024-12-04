import { HistoryInfProps } from '../../../../Interfaces/Interfaces';

function HistoryInf({ date, haveMoney, wantMoney, fromCurrency, toCurrency }: HistoryInfProps): JSX.Element {
  return (
    <div className="bg-white flex justify-between items-center shadow w-[392px] pt-[15px] pr-[16px] pb-[15px] pl-[16px] mt-[36px] rounded-[4px] text-[18px] font-roboto">
      <p className="font-normal text-gray-line">{date}</p>
      <p className="font-normal text-gray">{haveMoney} {fromCurrency}</p>
      <img src="./icons/arrow-left.svg" alt="arrow-left" />
      <p className="font-normal text-gray">{wantMoney} {toCurrency}</p>
    </div>
  );
}

export default HistoryInf;
