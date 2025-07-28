import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import KnowPage from "./pages/KnowPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/Know" element={<KnowPage/>} />
      </Routes>
    </Router>
  );
}
 
export default App;
 
 