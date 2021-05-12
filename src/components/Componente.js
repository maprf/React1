import React from 'react';  /**mejor poner import React, {Component} from 'react'; */

class Componente extends React.Component{
    state = {    
            show: true
    }
    ocultar = () => {
        this.setState({show:false})    }
    mostrar = () => {
        this.setState({show:true})    }

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso', 'Jamon', 'Piña'],
            calorias: 400
        };
        if(this.state.show){
            if(this.props.titulo === undefined){ //Si lo saco fuera se esta llamando continuamente
                this.ocultar();
                return(<h3>primer cambio</h3>);                    
            }else{
                return(<div>
                    <h3>Titulo: {this.props.titulo}--{/** en this.props se cogen propiedades del componente */}
                    <button onClick={this.ocultar}>Borrar</button></h3> {/**  */}
                    {receta.nombre}-- Total calorias: {receta.calorias}
                    <ol>
                        {receta.ingredientes.map((ingredientes,i)=> {
                        return(<li key={i}> {/**obligatoria poner identificador, para luego poder modif dimanicamente */}
                        {ingredientes}</li>);                            })}
                    </ol>
                <hr/></div>        );            }
        }else{
            return(
                <h3>No hay titulo--
                <button onClick={this.mostrar}>Recuperar</button></h3>);}
            
    }
}

export default Componente;