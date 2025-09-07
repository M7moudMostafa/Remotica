import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Splash from "./components/Splash";
import Card from "./components/Card/index";
import { useEffect } from "react";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";

function App() {
  useEffect(() => {
    setFocus("SIDEBAR_MENU");
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mainmenu" element={<MainLayout />} />
        <Route path="/mainmenu/:id" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
