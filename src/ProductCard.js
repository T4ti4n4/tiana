import React from "react";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
function ProductCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <ProductImage src={props.imageSrc} />
      <ProductName name={props.ProductName} />
      <ProductPrice price={props.ProductPrice} />
    </div>
  );
}

export default ProductCard;

// ProductCard tiene todo los componentes de los hijos

