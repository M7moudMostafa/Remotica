import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
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
        <Route path="/" element={<MainLayout />} />
        <Route path="/:id" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
