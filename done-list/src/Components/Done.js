import React, {Component} from 'react';
import DoneItem from './DoneItem.js';
import './Done.css';

export class Done extends Component {  
	

  render(){

    const tasks = this.props.tarefas.map(tarefa => <div key = {tarefa.id}>
    	<DoneItem tarefa = {tarefa} deletar = {this.props.deletar}/></div>);      

    return (
      <div className='GridContainer'>
        {tasks} 
      </div>
    );

  }
}

export default Done;
