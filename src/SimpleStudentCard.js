import React from "react";

function SimpleStudentCard(props) {
  return (
    <div>
      <h2>El estudiante es: {props.name}</h2>
      <h1>El estudiante es: {props.name2}</h1>
    </div>
  );
}
// Se hace la propiedad llamada name

export default SimpleStudentCard ;
