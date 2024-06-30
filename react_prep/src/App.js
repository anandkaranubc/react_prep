import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { price: 9999, name: "Samsung Galaxy S21", id: 1, quantity: 0 },
    { price: 19999, name: "Samsung Galaxy S21 Ultra", id: 2, quantity: 0 },
  ];
  return (
    <>
      <Navbar></Navbar>
      <ProductList products={products} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
