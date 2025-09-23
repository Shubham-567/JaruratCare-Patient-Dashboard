import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PatientPage from "./pages/PatientPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patients' element={<PatientPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
