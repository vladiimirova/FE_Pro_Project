import { Route, Routes } from "react-router-dom"; 
import Main from "../Pages/Main/Main.js";
import Converter from '../Pages/Converter/Converter.js'
import NotFound from "../Pages/NotFound/NotFound.js";

function RouterComponent() {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;