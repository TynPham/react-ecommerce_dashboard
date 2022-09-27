import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import Blank from "./pages/Blank";
import MainLayouts from "./layouts/MainLayouts";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<DashBoard />} />
          <Route path="orders" element={<Blank />} />
          <Route path="products" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
