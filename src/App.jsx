import { useState } from "react";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";
import "./App.css";
// import { BrowserRouter, Routes,Route } from "react-router-dom";
import { BrowserRouter, Routes,Route } from "react-router";
import { Collection } from "./Components/Collection";
import AddProduct from "./Components/AddProduct";
import { Admin } from "./Components/Admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
        <Header />
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>

      
     
    </>
  );
}

export default App;
