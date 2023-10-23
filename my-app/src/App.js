
import './App.css';
import ScrollServices from './Utilities/ScrollServices/ScrollServices';
import scrollreveal from "scrollreveal";
import Home from './Components/Home/Home';
import Pricing from './Components/Pricing/Pricing';
import Features from './Components/Features/Features';
import Footer from './Components/Home/Footer/Footer';
import React, { useEffect } from "react";

function App() {

  return (
    <div className="App">
        <ScrollServices/>
        <Home/>
        <Features/>
        <Pricing/>
        <Footer />
        
    </div>
  );
}


export default App;
