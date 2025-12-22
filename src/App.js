import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/properties" />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;