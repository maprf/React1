import React, {Component} from 'react';
import Tarea from './Tarea';

class ListaTareas extends Component{
    render() {
        return this.props.tareas.map(e => <Tarea key={e.id} tarea={e} borrarTareaById={this.props.borrarTareaById}/>);}
        
}

export default ListaTareas;