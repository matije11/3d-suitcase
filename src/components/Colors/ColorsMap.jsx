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
    switch (color) {
      case "Blue":
        return colorType.filter(({ name }) =>
          ["Blue", "Black", "Aluminium"].includes(name)
        );
      case "Green":
        return colorType.filter(({ name }) =>
          ["Green", "Black", "Aluminium"].includes(name)
        );
      case "Orange":
        return colorType.filter(({ name }) =>
          ["Orange", "Black", "Aluminium"].includes(name)
        );
      case "Red":
        return colorType.filter(({ name }) =>
          ["Red", "Black", "Aluminium"].includes(name)
        );
      case "Black":
        return colorType.filter(({ name }) =>
          ["Black", "Aluminium"].includes(name)
        );
      case "Aluminium":
        return colorType.filter(({ name }) =>
          ["Black", "Aluminium"].includes(name)
        );

      default:
        return;
    }
  };

  const filteredHandlesColors = getAvailableColors(
    handlesColors,
    activeColors.body
  );
  const filteredCornersColors = getAvailableColors(
    cornersColors,
    activeColors.body
  );
  const filteredWheelsColors = getAvailableColors(
    wheelsColors,
    activeColors.body
  );

  return (
    <>
      {active === responsiveCta.body && (
        <div className="colors-container">
          {bodyColors.map((color) => (
            <div
              key={color.name}
              className={getOuterElipseClass(color.name, "body")}
              onClick={() =>
                handleBodyColorClick(bodyParts, color.colorName, color.name)
              }
            >
              <div
                className="inner-elipse"
                style={{ background: color.gradient }}
              ></div>
            </div>
          ))}
        </div>
      )}
      {active === responsiveCta.handle && (
        <div className="colors-container">
          {filteredHandlesColors.map((color) => (
            <div
              key={color.name}
              className={getOuterElipseClass(color.name, "handle")}
              onClick={() =>
                handleColorClick(
                  handlesParts,
                  color.colorName,
                  color.name,
                  "handle"
                )
              }
            >
              <div
                className="inner-elipse"
                style={{
                  background: color.background,
                  opacity: color.opacity,
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
      {active === responsiveCta.corners && (
        <div className="colors-container">
          {filteredCornersColors.map((color) => (
            <div
              key={color.name}
              className={getOuterElipseClass(color.name, "corners")}
              onClick={() =>
                handleColorClick(
                  cornersParts,
                  color.colorName,
                  color.name,
                  "corners"
                )
              }
            >
              <div
                className="inner-elipse"
                style={{
                  background: color.background,
                  opacity: color.opacity,
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
      {active === responsiveCta.wheels && (
        <div className="colors-container">
          {filteredWheelsColors.map((color) => (
            <div
              key={color.name}
              className={getOuterElipseClass(color.name, "wheels")}
              onClick={() =>
                handleColorClick(
                  wheelsParts,
                  color.colorName,
                  color.name,
                  "wheels"
                )
              }
            >
              <div
                className="inner-elipse"
                style={{
                  background: color.background,
                  opacity: color.opacity,
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ColorsMap;
