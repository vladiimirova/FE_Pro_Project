import AdressCol from './FooterElements/AdressCol';
import InfCol from './FooterElements/InfCol';
import SupportCol from './FooterElements/SupportCol';
import TelCol from './FooterElements/TelCol';
import AppCol from './FooterElements/AppCol';

function Footer(): JSX.Element {
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
