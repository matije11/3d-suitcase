import { useContext } from "react";
import { CTAContext } from "../../contexts/CTAContext";
import {
  bodyColors,
  cornersColors,
  handlesColors,
  wheelsColors,
} from "../../data/colors";
import {
  bodyParts,
  handlesParts,
  cornersParts,
  wheelsParts,
} from "../../data/parts";
import { changeColor } from "../../utils/changeColor";
import useResponsiveCta from "../../hooks/useResponsiveCta";
import "./Colors.css";

const availableColorsMapping = {
  Blue: ["Blue", "Black", "Aluminium"],
  Green: ["Green", "Black", "Aluminium"],
  Orange: ["Orange", "Black", "Aluminium"],
  Red: ["Red", "Black", "Aluminium"],
  Black: ["Black", "Aluminium"],
  Aluminium: ["Black", "Aluminium"],
};

const ColorsMap = () => {
  const { responsiveCta } = useResponsiveCta();
  const { active, activeColors, handleColorClick, setActiveColors } =
    useContext(CTAContext);

  // getting className depending on active color
  const getOuterElipseClass = (colorName, category) => {
    return colorName === activeColors[category]
      ? "outer-elipse active"
      : "outer-elipse";
  };
  // diff. helper function for body color click
  // because we need to revert other parts to default color
  const handleBodyColorClick = (parts, colorName, name) => {
    changeColor(parts, colorName);
    changeColor(
      [...handlesParts, ...cornersParts, ...wheelsParts],
      "Chrome ALUMINIUM"
    );
    setActiveColors({
      body: name,
      handle: "Aluminium",
      corners: "Aluminium",
      wheels: "Aluminium",
    });
  };

  // filtering through available colors
  const getAvailableColors = (colorType, color) => {
    const allowedColors = availableColorsMapping[color] || [];
    return colorType.filter(({ name }) => allowedColors.includes(name));
  };

  const colorCategories = [
    { category: "body", colors: bodyColors, parts: bodyParts, isBody: true },
    { category: "handle", colors: handlesColors, parts: handlesParts },
    { category: "corners", colors: cornersColors, parts: cornersParts },
    { category: "wheels", colors: wheelsColors, parts: wheelsParts },
  ];
  return (
    <>
      {colorCategories.map(({ category, colors, parts, isBody }) => {
        const filteredColors =
          isBody && activeColors.body
            ? colors
            : getAvailableColors(colors, activeColors.body);
        return (
          active === responsiveCta[category] && (
            <div className="colors-container" key={category}>
              {filteredColors.map((color) => (
                <div
                  key={color.name}
                  className={getOuterElipseClass(color.name, category)}
                  onClick={() =>
                    isBody
                      ? handleBodyColorClick(parts, color.colorName, color.name)
                      : handleColorClick(
                          parts,
                          color.colorName,
                          color.name,
                          category
                        )
                  }
                >
                  <div
                    className="inner-elipse"
                    style={{
                      background: isBody ? color.gradient : color.background,
                      opacity: color.opacity,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )
        );
      })}
    </>
  );
};

export default ColorsMap;
