import "./App.css";
import Navbar from "./components/Navbar";
// import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
// import Avp from "./components/Products/Avp";
// import AllProducts from "./components/Products/AllProducts";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Dropdown />
      {/* <Homepage /> */}
      <AllRoutes />
      <Footer />

      {/* <AllProducts/> */}
    </>
  );
}

export default App;
