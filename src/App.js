import React from "react";
import ProductCard from "./ProductCard";
import ProductImage1 from "./assets/PC.jpeg";
import ProductImage2 from "./assets/Portatil.jpeg";
function App() {
  return (
    <div>
      <ProductCard
        imageSrc={ProductImage1}
        productName="Computador"
        ProductPrice="29.00"
      />
      <ProductCard
        imageSrc={ProductImage2}
        productName="Portatil"
        ProductPrice="29.00"
      />
    </div>
  );
}

export default App;

// Se exporta desde ProductCard porque es el padre de los hijos 

