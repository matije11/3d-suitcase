export function activateAnnotation(value) {
  console.log(value);

  switch (value) {
    case "Open":
      window.Unlimited3D.activateModifier({
        modifier: "open",
      });
      window.Unlimited3D.hideAnnotations({
        annotations: ["Open", "Extend handle", "Wheel spinner on"],
      });
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          {
            annotations: ["Close"],
          },
        ],
      });
      window.Unlimited3D.setSelectable(["Close"]);
      break;

    case "Close":
      window.Unlimited3D.activateModifier({
        modifier: "close",
      });
      window.Unlimited3D.hideAnnotations({
        annotations: ["Close", "Extend handle", "Wheel spinner on"],
      });
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          {
            annotations: ["Open", "Extend handle", "Wheel spinner on"],
          },
        ],
      });
      break;

    case "Extend handle":
      window.Unlimited3D.activateModifier({
        modifier: "extend_handle",
      });
      window.Unlimited3D.hideAnnotations({
        annotations: ["Open", "Extend handle", "Wheel spinner on"],
      });
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          {
            annotations: ["retract_handle"],
          },
        ],
      });
      window.Unlimited3D.setSelectable(["retract_handle"]);
      break;
    case "Wheel spinner on":
      window.Unlimited3D.activateModifier({
        modifier: "wheel_spinner_on",
      });
      window.Unlimited3D.hideAnnotations({
        annotations: ["Open", "Extend handle", "Wheel spinner on"],
      });
      window.Unlimited3D.showAnnotations({
        annotationObjects: [
          {
            annotations: ["Wheel spinner off"],
          },
        ],
      });
      window.Unlimited3D.setSelectable(["Wheel spinner off"]);
      break;
    default:
      break;
  }
}
