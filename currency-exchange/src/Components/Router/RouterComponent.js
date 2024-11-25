import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main.js';
import Converter from '../Pages/Converter/Converter.js';
import Services from '../Pages/ServicesPage/Services.js';
import Contacts from '../Pages/Contacts/Contacts.js';
import Questions from '../Pages/Questions/Questions.js';
import Cabinet from '../Pages/Cabinet/Cabinet.js';
import NotFound from '../Pages/NotFound/NotFound.js';

function RouterComponent() {
  return (
    <div className="Router-wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
