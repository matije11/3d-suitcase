import { useContext } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import useIsMobile from "../../hooks/useIsMobile";
import ColorsMap from "./ColorsMap";
import arrowLeftMobile from "../../assets/arrow-left-mobile.svg";
import arrowRightMobile from "../../assets/arrow-right-mobile.svg";
import "../ColorPicker/ColorPicker.css";
import useResponsiveCta from "../../hooks/useResponsiveCta";

const Colors = () => {
  const isMobile = useIsMobile();
  const { responsiveCta } = useResponsiveCta();
  const { active, activeColors } = useContext(CTAContext);

  return (
    <>
      <div className="cp-subtitle-container cp-subtitle-text">
        <p>Select Color</p>
        <p style={{ textTransform: "uppercase" }}>
          {active === responsiveCta.body && activeColors.body}
          {active === responsiveCta.handle && activeColors.handle}
          {active === responsiveCta.corners && activeColors.corners}
          {active === responsiveCta.wheels && activeColors.wheels}
        </p>
      </div>
      {!isMobile ? (
        <ColorsMap />
      ) : (
        <div className="colors-wrapper-mobile">
          <img src={arrowLeftMobile} alt="Arrow left mobile" />
          <div className="scroll-container">
            <ColorsMap />
          </div>
          <img src={arrowRightMobile} alt="Arrow right mobile" />
        </div>
      )}
    </>
  );
};

export default Colors;
