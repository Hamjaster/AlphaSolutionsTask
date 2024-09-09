import { useState } from "react";
import "./App.css";
import { MainNav, TopNav } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden font-cairo flex flex-col">
        <TopNav />
        <MainNav />
        <div className="flex-grow">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* Optionally add a redirect or default route */}
            <Route path="/" element={<LandingPage />} />{" "}
            {/* Redirect root to /home */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
