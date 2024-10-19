import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingContent" id="loadingContent">
      <div className="loading">
        <img
          src="https://codepencdn.unlimited3d.com/changeMaterials/assets/images/loader.gif?v=0.1"
          alt="loader"
          className="loading-img"
        />
        <br />
      </div>
    </div>
  );
};

export default Loading;
