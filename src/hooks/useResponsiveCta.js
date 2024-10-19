import useIsMobile from "./useIsMobile";

const cta = {
  body: { desktop: "camera_body", mobile: "camera_body_mobile" },
  handle: { desktop: "camera_handle", mobile: "camera_handle_mobile" },
  corners: { desktop: "camera_corners", mobile: "camera_corners_mobile" },
  wheels: { desktop: "camera_wheels", mobile: "camera_wheels_mobile" },
};

const default_desktop = "default_camera_desktop";
const default_mobile = "default_camera_mobile";

const useResponsiveCta = () => {
  const isMobile = useIsMobile();

  // Dynamically return an object where values depend on screen size
  const responsiveCta = Object.keys(cta).reduce((acc, key) => {
    acc[key] = !isMobile ? cta[key].desktop : cta[key].mobile;
    return acc;
  }, {});

  const default_camera = !isMobile ? default_desktop : default_mobile;

  return {
    responsiveCta,
    default_camera,
  };
};

export default useResponsiveCta;
