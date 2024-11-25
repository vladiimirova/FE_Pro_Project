import Logo from './HeaderComponents/Logo.js';
import Nav from './HeaderComponents/Nav.js';
import Cabinet from './HeaderComponents/Cabinet.js';

function Header() {
  return (
    <div>
      <header className="flex justify-center bg-custom-light-blue">
        <div className="container">
          <div className="flex justify-between items-center pt-[34px] pb-[33px]">
            <div className="flex justify-between items-center gap-[80px]">
              <Logo />
              <Nav />
            </div>
            <Cabinet />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
