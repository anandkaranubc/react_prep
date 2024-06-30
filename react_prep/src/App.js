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
    if (newTotalAmount < 0) {
      newTotalAmount = 0;
    }
    setTotalAmount(newTotalAmount);
  };

  const resetData = () => {
    let newProductList = [...productList];
    newProductList = newProductList.map((product) => {
      product.quantity = 0;
      return product;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="container mt-5">
        <ProductList
          products={productList}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetData={resetData} />
    </>
  );
}

export default App;
