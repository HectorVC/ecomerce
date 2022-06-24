import Titulo from "../Titulo/Titulo";
import Formulario from "../Formulario/Formulario";
import ComponenteClase from "../../ComponenteClase";

const ComponenteContenedor = () => {
    let titulo = "Titulo de mi Aplicacion";
    let subTitulo = "Subtitulo de mi Aplicacion";
  return (
    <div>
      <Titulo titulo={titulo} subTitulo={subTitulo} />
      <Formulario />
      <ComponenteClase />
      
    </div>
  );
};

export default ComponenteContenedor;
