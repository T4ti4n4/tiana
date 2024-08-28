import React from "react";
import StudentInfo from "./StudentInfo";

function StudentCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <StudentInfo name={props.name} grade={props.grade} />
    </div>
  );
}

export default StudentCard;
// Linea 7, Llamo un a StudentInfo para aplicarle los estilos en estuden info