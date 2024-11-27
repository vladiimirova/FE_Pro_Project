import MainLeftInf from './MainElements/MainLeftInf';
import MainImg from './MainElements/MainImg';

function Main(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex justify-center items-center mt-[120px] mb-[120px] gap-[50px]">
          <MainLeftInf />
          <MainImg />
        </div>
      </div>
    </div>
  );
}

export default Main;
