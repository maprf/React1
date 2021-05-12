import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes Personalizados
import Componente from './components/Componente'
import ListaTareas from './components/ListaTareas'
import FormularioTarea from './components/FormularioTarea';
import Posts from './components/Posts';

import lista from './assets/sample/datos.json'

/**function titulo2 (nombre){
    var etiqueta = <h2>Pruevas de {nombre}</h2>; //solo una etiqueta, aunque puede tener otras dentro.
    return etiqueta;}*/

const titulo2 = nombre => <h2>Pruevas de {nombre}</h2>;
class App extends Component {

  state ={
    lista: lista
  }
  addTarea = (tarea) =>{
      const nuevaTarea ={
        "id": this.state.lista[this.state.lista.length-1].id+1,
        "titulo" : tarea.titulo,
        "descripcion" : tarea.descripcion,
        "hecha" : false
      }
      this.setState({
        lista: [...this.state.lista, nuevaTarea]
      })
      console.log(nuevaTarea);
  }
  borrarTareaById = (id) => {
    console.log(id);
      const nuevaLista = this.state.lista.filter(tarea => tarea.id!==id);
      this.setState({lista: nuevaLista});
      console.log(nuevaLista);
  }


  render(){
  let nombre = "Mani Perez R";
  //console.log(lista);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola mundo!
        </p>
      </header>
      <main>
        <BrowserRouter>     
        <Link to="/">Home</Link>
        <Link to="/lista">Lista</Link>
        <Link to="/posts">Post</Link>   
          <Route exact path="/" render={()=>{return( 
              <div>
                {titulo2(nombre)}

                <Componente titulo="primer componente"/>
                <Componente/>
              </div> )}}>        
          </Route>       
          <Route path="/lista" render={()=>{return(
            <div>
                <FormularioTarea addTarea={this.addTarea}/>
                <ListaTareas tareas={this.state.lista} borrarTareaById={this.borrarTareaById}/> 
            </div>)}}>        
          </Route>

          <Route path="/posts" render={()=>{return(
            <div>
                <Posts/>
            </div>)}}>        
          </Route>
        </BrowserRouter>
      </main>
    </div>
  );
  }
}

export default App;