import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Botox from "./pages/behandlinger/Botox";
import Om from "./pages/Om";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/behandlinger/botox" element={<Botox />} />
      </Routes>
    </Router>
  );
}
