export function activateModifier(value) {
  switch (value) {
    case "camera_body":
      window.Unlimited3D.activateModifier({
        modifier: "camera_body",
      });
      break;
    case "camera_body_mobile":
      window.Unlimited3D.activateModifier({
        modifier: "camera_body_mobile",
      });
      break;
    case "camera_corners":
      window.Unlimited3D.activateModifier({
        modifier: "camera_corners",
      });
      break;
    case "camera_corners_mobile":
      window.Unlimited3D.activateModifier({
        modifier: "camera_corners_mobile",
      });
      break;
    case "camera_handle":
      window.Unlimited3D.activateModifier({
        modifier: "camera_handle",
      });
      break;
    case "camera_handle_mobile":
      window.Unlimited3D.activateModifier({
        modifier: "camera_handle_mobile",
      });
      break;
    case "camera_wheels":
      window.Unlimited3D.activateModifier({
        modifier: "camera_wheels",
      });
      break;
    case "camera_wheels_mobile":
      window.Unlimited3D.activateModifier({
        modifier: "camera_wheels_mobile",
      });
      break;
    case "default_camera_desktop":
      window.Unlimited3D.activateModifier({
        modifier: "default_camera_desktop",
      });
      break;
    case "default_camera_mobile":
      window.Unlimited3D.activateModifier({
        modifier: "default_camera_mobile",
      });
      break;
    default:
      break;
  }
}
