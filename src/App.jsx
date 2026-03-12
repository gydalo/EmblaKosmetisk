import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Botox from "./pages/behandlinger/Botox";
import Om from "./pages/Om";
import Booking from "./pages/Booking";
import Profhilo from "./pages/behandlinger/Profhilo";
import Skinpen from "./pages/behandlinger/Skinpen";
import KjemiskPeel from "./pages/behandlinger/KjemiskPeel";
import HvilePuls from "./pages/behandlinger/Hvilepuls";
import FargingAvVipperBryn from "./pages/behandlinger/Farging-vipper-bryn";
import Laser from "./pages/behandlinger/Laser";
import Gavekort from "./pages/Gavekort";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/behandlinger/botox" element={<Botox />} />
        <Route path="/behandlinger/profhilo" element={<Profhilo />} />
        <Route path="/behandlinger/skinpen" element={<Skinpen />} />
        <Route path="/behandlinger/kjemisk-peel" element={<KjemiskPeel />} />
        <Route path="/behandlinger/hvilepuls" element={<HvilePuls />} />
        <Route path="/behandlinger/farging-av-vipper-bryn" element={<FargingAvVipperBryn />} />
        <Route path="/behandlinger/laser" element={<Laser />} />
        <Route path="/gavekort" element={<Gavekort />} />
      </Routes>
    </Router>
  );
}
