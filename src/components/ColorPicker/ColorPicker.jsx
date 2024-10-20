import { useContext } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import Image from "./Image";
import Colors from "../Colors/Colors";
import useIsMobile from "../../hooks/useIsMobile";
import useResponsiveCta from "../../hooks/useResponsiveCta";
import close from "../../assets/close.svg";
import previous from "../../assets/previous.svg";
import next from "../../assets/next.svg";
import "./ColorPicker.css";

const ColorPicker = () => {
  const isMobile = useIsMobile();
  const { responsiveCta } = useResponsiveCta();
  const { active, handleCloseColorPicker, handleNext, handlePrevious } =
    useContext(CTAContext);

  const categoryTitles = {
    [responsiveCta.body]: "BODY COLOR",
    [responsiveCta.handle]: "HANDLES",
    [responsiveCta.corners]: "CORNERS",
    [responsiveCta.wheels]: "WHEELS",
  };

  return (
    <div className={!isMobile ? "cp-container" : "cp-container-mobile"}>
      <div className="cp-header cp-title">
        <p>{categoryTitles[active]}</p>
        <div style={{ cursor: "pointer" }} onClick={handleCloseColorPicker}>
          <img src={close} alt="Close" />
        </div>
      </div>
      <Colors />
      {active === responsiveCta.body && <Image />}
      <div className="cp-footer">
        <div onClick={handlePrevious}>
          <img src={previous} alt="Previous" />
        </div>
        <div onClick={handleNext}>
          <span className="next-wrapper">
            <p>Next</p>
            <img src={next} alt="Next" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
