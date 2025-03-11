import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import RegisterPage from "./Pages/RegisterPage/Register.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import NavBar from "./Pages/NavBar/NavBar.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/nav" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
