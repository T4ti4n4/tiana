import React from "react";
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
// name por el nombre de la propiedad
// Exportamos la App para poderla usar en otros componentes
// Exportamos a StudentCard ya que es el que tiene los estilos css
