import useIsMobile from "../../hooks/useIsMobile";
import PropTypes from "prop-types";
import "./Option.css";

const Option = ({ text, onClick, isActive }) => {
  const isMobile = useIsMobile();
  const style = {
    border: isActive ? "1px solid #121010" : undefined,
  };
  return (
    <div className="option-container" style={style} onClick={onClick}>
      {!isMobile && (
        <div className="outer-elipse-option">
          {isActive && <div className="inner-elipse-option"></div>}
        </div>
      )}
      <div className="option-text">{text}</div>
    </div>
  );
};

export default Option;

Option.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};
