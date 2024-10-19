export const hideAnnotations = () => {
  window.Unlimited3D.hideAnnotations({
    annotations: [
      "Open",
      "Extend handle",
      "Wheel spinner on",
      "Close",
      "Retract handle",
      "Wheel spinner off",
    ],
  });
};

export const showAnnotations = () => {
  window.Unlimited3D.showAnnotations({
    annotationObjects: [
      {
        annotations: ["Open", "Extend handle", "Wheel spinner on"],
      },
    ],
  });
};
