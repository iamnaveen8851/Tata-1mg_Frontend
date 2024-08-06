import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <Navbar />
      <Dropdown />
      <Homepage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
