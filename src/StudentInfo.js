import React from "react";

function StudentInfo(props) {
  return (
    <div>
      <h3>Nombre: {props.name}</h3>
      <p>Grado: {props.grade}</p>
    </div>
  );
}

export default StudentInfo;

// Aquí se hace uso de una función llamada StudentInfo que recibe un objeto con propiedades name y grade.
