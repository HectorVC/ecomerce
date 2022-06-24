import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  const count = 0; // estado de App
  let nombre = "Hector";
  let apellido = "Viveros";
 
  const saludo = () => console.log("Saludos ....");

  const objStyle = { color: "white", backgroundColor: "black", fontSize: 50 };
  return (
    <div className="App" style={objStyle}>
      <NavBar>
         <ItemListContainer/>
        </NavBar>
     
      <p>Hector</p>

      
      {/* {Titulo ()}  */}
     
      {/* <Name nombre={ nombre }apellido={ apellido} /> */}
    
      {count}
      <img src={logo} />
      
      <div />
    </div>
  );
}

export default App;
