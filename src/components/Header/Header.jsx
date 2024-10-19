import { useContext } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import "./Header.css";

const Header = () => {
  const { activeHeader, handleClickHeader } = useContext(CTAContext);

  return (
    <div className="header-container">
      <div
        className={`header-button ${
          activeHeader === "configurator" ? "active" : ""
        }`}
        onClick={() => handleClickHeader("configurator")}
      >
        <p className="header-text">CONFIGURATOR</p>
      </div>
      <div
        className={`header-button ${
          activeHeader === "animations" ? "active" : ""
        }`}
        onClick={() => handleClickHeader("animations")}
      >
        <p className="header-text">ANIMATIONS</p>
      </div>
    </div>
  );
};

export default Header;
