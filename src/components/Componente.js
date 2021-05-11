import React from 'react';  /**mejor poner import React, {Component} from 'react'; */

class Componente extends React.Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso', 'Jamon', 'Piña'],
            calorias: 400
        };

        return(
            <div>
                <h3>Soy un mini componenete</h3>
                {receta.nombre}-- Total calorias: {receta.calorias}
                <ol>
                {receta.ingredientes.map((ingredientes,i)=> {
                    return(<li key={i}> {/**obligatoria poner identificador, para luego poder modif dimanicamente */}
                            {ingredientes}</li>);
                })}
                </ol>
                <hr/></div>
        );
    }
}

export default Componente;