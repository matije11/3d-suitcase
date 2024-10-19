var nextButtonFlag = false;

export function activateModifier(value) {
  if (nextButtonFlag) return;

  nextButtonFlag = true;

  switch (value) {
    case "camera_body":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_body",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_body_mobile":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_body_mobile",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_corners":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_corners",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_corners_mobile":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_corners_mobile",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_handle":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_handle",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_handle_mobile":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_handle_mobile",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_wheels":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_wheels",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "camera_wheels_mobile":
      window.Unlimited3D.activateModifier(
        {
          modifier: "camera_wheels_mobile",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "default_camera_desktop":
      window.Unlimited3D.activateModifier(
        {
          modifier: "default_camera_desktop",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    case "default_camera_mobile":
      window.Unlimited3D.activateModifier(
        {
          modifier: "default_camera_mobile",
        },
        () => {
          nextButtonFlag = false;
        }
      );
      break;
    default:
      break;
  }
}
