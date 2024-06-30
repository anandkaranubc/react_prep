import React from "react";
import Product from "./Product";

export default function ProductList(props) {
    return props.products.length > 0 ? props.products.map((product, i) => {
        return (
            <Product
                product={product}
                key={i}
                addQuantity={props.addQuantity}
                subtractQuantity={props.subtractQuantity}
                index={i}
                removeItem={props.removeItem}
            />
        );
    }) : <h1>No Products</h1>;
}
