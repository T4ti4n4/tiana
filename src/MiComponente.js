import React from "react";

// Definimos nuestra clase MiComponente que hereda de React.Component
class MiComponente extends React.Component {
  constructor(props) {
    //Se inicializa el estado del componente
    super(props);
    this.state = { mensaje: "Hola, mundo" }; //This state, para pasar una propiedad al constructor
  }
  componentDidMount() {
    //Llamando a la api(llamar los datos de un json o backend)
    console.log("El componente se ha montado");
  }
  componentDidUpdate(prevProps, prvState) {
    //Este método se llama cada vez que se actualiza el estado del componente recibe las propiedades y estados anteriores
    console.log("El estado del componente ha cambiado");
  }

  //El estado del componente ha cambiado a muerto
  componentWillUnmount() {
    //Tareas de limpieza, está a punto de desaparecer
    console.log("El estado del componente ha muerto");
  }
  render() {
    //Metodo para mostrar el mensaje
    return <div>{this.state.mensaje}</div>;
  }
}

export default MiComponente;
