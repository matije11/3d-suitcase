import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { activateModifier } from "../utils/activateModifier";
import { changeColor } from "../utils/changeColor";
import { hideAnnotations, showAnnotations } from "../utils/showHideAnnotations";
import useResponsiveCta from "../hooks/useResponsiveCta";

export const CTAContext = createContext({
  active: null,
  activeColors: null,
  activeHeader: null,
  handleChangeCTA: () => {},
  handleColorClick: () => {},
  handleCloseColorPicker: () => {},
  handleNext: () => {},
  handlePrevious: () => {},
  handleClickHeader: () => {},
});

export const CTAProvider = ({ children }) => {
  const { responsiveCta, default_camera } = useResponsiveCta();
  const ctaKeys = Object.values(responsiveCta);
  const [active, setActive] = useState(null); // represents active part of the suitcase
  const [activeHeader, setActiveHeader] = useState("configurator"); // represents acive header cta (configurator/animations)
  const [activeColors, setActiveColors] = useState({
    body: "Aluminium",
    handle: "Aluminium",
    corners: "Aluminium",
    wheels: "Aluminium",
  }); // active colors of all parts

  //#region logic for parts of suitcase
  const handleClickCTA = (modifier) => {
    setActive(modifier);
    activateModifier(modifier);
  };
  //#endregion

  //#region Logic for color picker
  const handleCloseColorPicker = () => {
    setActive(null);
    activateModifier(default_camera);
  };

  const handleColorClick = (parts, color, colorName, category) => {
    changeColor(parts, color);
    setActiveColors((prev) => ({
      ...prev,
      [category]: colorName,
    }));
  };

  const handleNext = () => {
    const currentIndex = ctaKeys.indexOf(active);
    const nextIndex = (currentIndex + 1) % ctaKeys.length;
    setActive(ctaKeys[nextIndex]);
    activateModifier(ctaKeys[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = ctaKeys.indexOf(active);
    const previousIndex = (currentIndex - 1 + ctaKeys.length) % ctaKeys.length;
    setActive(ctaKeys[previousIndex]);
    activateModifier(ctaKeys[previousIndex]);
  };
  //#endregion

  //#region Logic for two cta-s in header
  const handleClickHeader = (value) => {
    if (value === "configurator") {
      hideAnnotations();
    } else {
      showAnnotations();
    }
    setActiveHeader(value);
    setActive(null);
    activateModifier(default_camera);
  };
  //#endregion

  const value = {
    active,
    activeColors,
    activeHeader,
    handleClickCTA,
    handleColorClick,
    handleCloseColorPicker,
    handleNext,
    handlePrevious,
    handleClickHeader,
    setActiveColors,
  };
  return <CTAContext.Provider value={value}>{children}</CTAContext.Provider>;
};

CTAProvider.propTypes = {
  children: PropTypes.element,
};
