import useIsMobile from "../../hooks/useIsMobile";
import add from "../../assets/add.svg";
import line from "../../assets/line.svg";
import "./ColorPicker.css";

const Image = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="cp-image-text">
        <p>Image</p>
        <p>NO IMAGE</p>
      </div>
      <div className={!isMobile ? "image-container" : "image-container-mobile"}>
        <div className="outer-elipse" style={{ border: "1px solid #121010" }}>
          <div className="inner-elipse" style={{ background: "#F5F6F8" }}>
            <img src={line} alt="Line" />
          </div>
        </div>
        <div className="outer-elipse">
          <div
            className="inner-elipse"
            style={{ background: "#F5F6F8", position: "relative" }}
          >
            <img src={add} alt="Add" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
