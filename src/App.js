import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
