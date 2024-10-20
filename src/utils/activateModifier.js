const modifiers = [
  "camera_body",
  "camera_body_mobile",
  "camera_corners",
  "camera_corners_mobile",
  "camera_handle",
  "camera_handle_mobile",
  "camera_wheels",
  "camera_wheels_mobile",
  "default_camera_desktop",
  "default_camera_mobile",
];
export function activateModifier(value) {
  if (modifiers.includes(value)) {
    window.Unlimited3D.activateModifier({ modifier: value });
  }
}
