import { useContext, useRef } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import useIsMobile from "../../hooks/useIsMobile";
import ColorsMap from "./ColorsMap";
import arrowLeftMobile from "../../assets/arrow-left-mobile.svg";
import arrowRightMobile from "../../assets/arrow-right-mobile.svg";
import useResponsiveCta from "../../hooks/useResponsiveCta";
import "./Colors.css";

const Colors = () => {
  const scrollContainerRef = useRef(null);
  const isMobile = useIsMobile();
  const { responsiveCta } = useResponsiveCta();
  const { active, activeColors } = useContext(CTAContext);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft +=
        direction === "left" ? -150 : 150;
    }
  };

  const getActiveColor = () => {
    switch (active) {
      case responsiveCta.body:
        return activeColors.body;
      case responsiveCta.handle:
        return activeColors.handle;
      case responsiveCta.corners:
        return activeColors.corners;
      case responsiveCta.wheels:
        return activeColors.wheels;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="cp-subtitle-container">
        <p>Select Color</p>
        <p style={{ textTransform: "uppercase" }}>{getActiveColor()}</p>
      </div>
      {!isMobile ? (
        <ColorsMap />
      ) : (
        <div className="colors-wrapper-mobile">
          <img
            src={arrowLeftMobile}
            alt="Arrow left mobile"
            style={{ marginLeft: "8px" }}
            onClick={() => handleScroll("left")}
          />
          <div className="scroll-container" ref={scrollContainerRef}>
            <ColorsMap />
          </div>
          <img
            src={arrowRightMobile}
            alt="Arrow right mobile"
            style={{ marginRight: "8px" }}
            onClick={() => handleScroll("right")}
          />
        </div>
      )}
    </>
  );
};

export default Colors;
