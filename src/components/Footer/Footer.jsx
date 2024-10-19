import Option from "../Option/Option";
import { useContext } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import useResponsiveCta from "../../hooks/useResponsiveCta";
import "./Footer.css";

const Footer = () => {
  const { responsiveCta } = useResponsiveCta();
  const { active, handleClickCTA } = useContext(CTAContext);

  return (
    <div className="footer-container">
      <Option
        text="Body"
        onClick={() => handleClickCTA(responsiveCta.body)}
        isActive={active === responsiveCta.body}
      />
      <Option
        text="Handles"
        onClick={() => handleClickCTA(responsiveCta.handle)}
        isActive={active === responsiveCta.handle}
      />
      <Option
        text="Corners"
        onClick={() => handleClickCTA(responsiveCta.corners)}
        isActive={active === responsiveCta.corners}
      />
      <Option
        text="Wheels"
        onClick={() => handleClickCTA(responsiveCta.wheels)}
        isActive={active === responsiveCta.wheels}
      />
    </div>
  );
};

export default Footer;
