import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Converter from '../Pages/Converter/Converter';
import Services from '../Pages/ServicesPage/Services';
import Contacts from '../Pages/Contacts/Contacts';
import Questions from '../Pages/Questions/Questions';
import Cabinet from '../Pages/Cabinet/Cabinet';
import NotFound from '../Pages/NotFound/NotFound';

function RouterComponent(): JSX.Element {
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
