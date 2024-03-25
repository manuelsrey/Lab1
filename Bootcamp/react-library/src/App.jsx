import React from "react";
import Header from "./components/Header/Header"
import "./App.css"
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";


function App(){
  return (
    <>
      <Header />
      <Banner />
      <ProductsSection />
      <Footer />
    </>
  );
}

export default App;
