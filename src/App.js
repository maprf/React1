import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes Personalizados
import Componente from './components/Componente'


/**function titulo2 (nombre){
    var etiqueta = <h2>Pruevas de {nombre}</h2>; //solo una etiqueta, aunque puede tener otras dentro.
    return etiqueta;}*/
const titulo2 = nombre => <h2>Pruevas de {nombre}</h2>;

function App() {
  let nombre = "Mani Perez R";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola mundo!
        </p>
        {titulo2(nombre)}
        
        <Componente/>  {/**pongo un componente*/}
        <Componente/>
      </header>
    </div>
  );
}

export default App;
