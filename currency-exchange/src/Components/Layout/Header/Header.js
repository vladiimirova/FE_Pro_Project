import Logo from "./HeaderComponents/Logo.js";
import Nav from "./HeaderComponents/Nav.js";
import Cabinet from "./HeaderComponents/Cabinet.js";

function Header() {
  return (
    // header
    <div className="bg-custom-light-blue">
      {/* app header */}
      <header className="flex justify-center">
        {/* app container */}
        <div className="container">
          {/* headerwrapper */}
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
