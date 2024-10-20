// Map of annotation names to corresponding modifiers
const annotationMap = {
  Open: {
    modifier: "open",
    show: ["Close"],
  },
  Close: {
    modifier: "close",
    show: ["Open", "Extend handle", "Wheel spinner on"],
  },
  "Extend handle": { modifier: "extend_handle", show: ["Retract handle"] },
  "Retract handle": {
    modifier: "retract_handle",
    show: ["Open", "Extend handle", "Wheel spinner on"],
  },
  "Wheel spinner on": {
    modifier: "wheel_spinner_on",
    show: ["Wheel spinner off"],
  },
  "Wheel spinner off": {
    modifier: "wheel_spinner_off",
    show: ["Open", "Extend handle", "Wheel spinner on"],
  },
};

export function activateAnnotation(value) {
  const annotation = annotationMap[value];

  // calling activeateModifier function for specific annotation
  // with callback function do show corresponding annotation and hide others
  if (annotation) {
    window.Unlimited3D.activateModifier(
      {
        modifier: annotation.modifier,
      },
      () => {
        window.Unlimited3D.showOnlyAnnotations({
          annotationObjects: [{ annotations: annotation.show }],
        });
      }
    );
  }
}
