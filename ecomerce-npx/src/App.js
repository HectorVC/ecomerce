import logo from "./logo.svg";
import "./App.css";
import ComponenteClase from "./ComponenteClase"
import Titulo from "./components/Titulo/Titulo";
import Formulario from "./components/Formulario/Formulario";

function App() {
  const count = 0// estado de App
  const objStyle = { color: 'white', backgroundColor: 'black', fontSize: 50 }
  return (
      <div className="App" style={objStyle} >
        <Titulo/>
        {/* {Titulo ()}  */}
        <Formulario/>
    <ComponenteClase />
  { count }
      <img src={logo} />
      <p>Hector</p>
      <div />
      </div >

  )
  }


export default App


