import { useEffect } from "react";
import { hideAnnotations } from "../../utils/showHideAnnotations";
import { activateAnnotation } from "../../utils/activateAnnotation";
import "./Suitcase.css";

let config = {
  camera: window.innerWidth > 768 ? "Camera Desktop" : "Camera Mobile",
  cameraControl: { autoRotate: true },
};

const options = {
  distID: "latest",
  solution3DName: "suitcase-color",
  projectName: "resources-for-videos-and-marketing-purposes",
  solution3DID: "62766",
  containerID: "container3d_replace",

  onPointerClick: function (objectsClick) {
    console.log(objectsClick);
    if (objectsClick.length > 0) {
      if (objectsClick[0].type == "annotation") {
        activateAnnotation(objectsClick[0].name);
      }
    }
  },
};

const Suitcase = () => {
  useEffect(() => {
    window.Unlimited3D.init(options, config, function (error, status) {
      if (error || !status) {
        return;
      }
      window.loadingContent.style.display = "none";

      window.Unlimited3D.setSelectable([
        "Close",
        "Retract handle",
        "Wheel spinner off",
      ]);

      window.Unlimited3D.getAvailableAnnotations(function (error, result) {
        console.log(result);
      });

      hideAnnotations();
    });
  }, []);

  return <div id="container3d_replace" className="suitcase-container" />;
};

export default Suitcase;
