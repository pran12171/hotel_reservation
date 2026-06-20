import logo from "./assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header-bar">
      <img src={logo} alt="Flavors of Pavartty logo" className="logo" />
    </div>
  );
}

export default Header;