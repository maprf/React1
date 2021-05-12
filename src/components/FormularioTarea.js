import React, {Component} from 'react';

export default class FormularioTarea extends Component{

    state = {
        titulo : '',
        descripcion : ''
    }

    envio = (evento) => {
            evento.preventDefault();
            this.props.addTarea({"titulo" :this.state.titulo,"descripcion": this.state.descripcion})
            //console.log(this.state);
    }
    cambios = (evento) => {
            this.setState({[evento.target.name]: evento.target.value}) //solo funciona, xq lo elementos del From tienen el mismo nombre que las var de state
    }

    render(){
        return (<form onSubmit={this.envio}>
                    <input name="titulo" type="test" placeholder= "Escribe nueva tarea"  onChange={this.cambios} value={this.state.titulo}/><br/>
                    <textarea name="descripcion" placeholder= "Escribe descsripcion" onChange={this.cambios} value={this.state.descripcion}/>
                    <input type="submit" value="envia"/>
            </form>)
    }
}
