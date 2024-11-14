import CardLeftInf from "./CardElements/CardLeftInf.js";
import CardImg from "./CardElements/CardImg.js";

function Card() {
  return (
    <div className="flex justify-center bg-custom-bg bg-center bg-cover bg-no-repeat h-[400px]">
      <div className="container">
        <div className="flex justify-center items-center mt-[85px] gap-[240px]">
          <CardLeftInf />
          <CardImg />
        </div>
      </div>
    </div>
  );
}

export default Card;
