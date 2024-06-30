import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const initialProducts = [
    { price: 9999, name: "Samsung Galaxy S21", id: 1, quantity: 0 },
    { price: 19999, name: "Samsung Galaxy S21 Ultra", id: 2, quantity: 0 },
  ];

  let [productList, setProductList] = useState(initialProducts);
  let [totalAmount, setTotalAmount] = useState(0);

  const addQuantity = (id) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[id].quantity++;
    newTotalAmount += newProductList[id].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const subtractQuantity = (id) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[id].quantity > 0
      ? newProductList[id].quantity--
      : (newProductList[id].quantity = 0);
    newTotalAmount -= newProductList[id].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-5">
        <ProductList
          products={productList}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          totalAmount={totalAmount}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
