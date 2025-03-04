import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import NavHome from "./Components/Nav/NavHome.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import App from "./App.jsx";
import "bootstrap";
import "./index.css";
import "./styles/custom.scss";
import { Toaster } from "sonner";

// Component to manage conditional Nav rendering
const ConditionalNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/about-us";

  return isHome ? <NavHome /> : <Nav />;
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConditionalNav />
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
    <Toaster position="top-center" richColors />
    <Footer />
  </BrowserRouter>
);
