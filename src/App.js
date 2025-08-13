import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Splash from "./components/Splash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mainmenu" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
