import AdressCol from './FooterElements/AdressCol.js';
import InfCol from './FooterElements/InfCol.js';
import SupportCol from './FooterElements/SupportCol.js';
import TelCol from './FooterElements/TelCol.js';
import AppCol from './FooterElements/AppCol.js';

function Footer() {
  return (
    <div>
      <footer className="flex justify-center bg-custom-light-blue">
        <div className="container">
          <div className="flex justify-between mt-[53px] mb-[60px]">
            <AdressCol />
            <InfCol />
            <SupportCol />
            <TelCol />
            <AppCol />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
