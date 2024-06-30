import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.products.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        addQuantity={props.addQuantity}
        subtractQuantity={props.subtractQuantity}
        index={i}
      />
    );
  });
}
