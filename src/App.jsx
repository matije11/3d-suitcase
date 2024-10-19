import { useContext } from "react";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import Suitcase from "./components/Suitcase/Suitcase";
import Footer from "./components/Footer/Footer";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import { CTAContext } from "./contexts/CTAContext";
import "./App.css";

function App() {
  const { active, activeHeader } = useContext(CTAContext);
  return (
    <div className="container">
      <Loading />
      <div>
        <Header />
        <Suitcase />
        {activeHeader !== "animations" && <Footer />}
      </div>
      {active && <ColorPicker />}
    </div>
  );
}

export default App;
