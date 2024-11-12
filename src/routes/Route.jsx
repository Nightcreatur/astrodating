import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "../components/SplashScreen";
import LoginPage from "../components/LoginPage/Login1";
import Message from "../components/Message/Message";
import Profile from "../components/Profile/Profile";


import BottomNavigationBar from "../components/BottomNavigation/BottomNavigationBar";
import ProfileSetup from "../components/PofileSetup/ProfileSetup";
import ZodiacWheel from "../components/Zodiac/ZodiacWheel";
import ProfileGrid from "../components/HomePage/ProfileGrid";
import HomePage from "../components/HomePage/Homepage";


const Webroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/l" element={<LoginPage />} />
        <Route path="/l2" element={<ZodiacWheel />} />
        <Route path="/l3" element={<ProfileSetup />} />
        <Route path="/test" element={<ProfileGrid />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bottom" element={<BottomNavigationBar />} />
      </Routes>
    </Router>
  );
};

export default Webroutes;
