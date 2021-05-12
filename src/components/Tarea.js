import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Tarea extends Component{ 

    state = {
        tarea : this.props.tarea
    }
    StyleTarea(){
        return{
            fontSize: '20px',
            color: this.state.tarea.hecha ? 'gray' : 'black',
            textDecoration: 'none'
        }
    }

    estadoRealizacion = ()=>{
        this.state.tarea.hecha = !this.state.tarea.hecha;
        this.setState({tarea : this.state.tarea});
    }

    render() {
        return (<p style={this.StyleTarea()} key={this.state.tarea.id}>
                    {this.state.tarea.titulo}-{this.state.tarea.descripcion}
                    <input type="checkbox" checked={this.state.tarea.hecha} onChange={this.estadoRealizacion}/>
                    <button onClick={this.props.borrarTareaById.bind(this,this.state.tarea.id)}>X</button></p>);}



/**   --no me va , no se xq
    Tarea.propTypes = {
        tarea: PropTypes.object.isRequired
    }; */
    
                 
}

export default Tarea;