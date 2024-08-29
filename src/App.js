import React from "react";
// import ProductCard from "./ProductCard";
// import ProductImage1 from "./assets/PC.jpeg";
// import ProductImage2 from "./assets/Portatil.jpeg";
// function App() {
//   return (
//     <div>
//       <ProductCard
//         imageSrc={ProductImage1}
//         productName="Computador"
//         ProductPrice="29.00"
//       />
//       <ProductCard
//         imageSrc={ProductImage2}
//         productName="Portatil"
//         ProductPrice="29.00"
//       /
import SimpleStudentCard from "./SimpleStudentCard";
import StudentInfo from "./StudentInfo";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      {/* <SimpleStudentCard name="Tiana" name2="Santiago" /> */}
      <StudentCard name="Tiana" grade="Sexto" />
    </div>
  );
}

export default App;

// Se exporta desde ProductCard porque es el padre de los hijos 

// name por el nombre de la propiedad
// Exportamos la App para poderla usar en otros componentes
// Exportamos a StudentCard ya que es el que tiene los estilos css
