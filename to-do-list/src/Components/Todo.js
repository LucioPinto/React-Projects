import React, {Component} from 'react';
import TodoItem from './TodoItem.js';

export class Todo extends Component {  
	

  render(){

    const tasks = this.props.tarefas.map(tarefa => <div key = {tarefa.id} className ="Teste">
    	<TodoItem tarefa = {tarefa} markComplete = {this.props.markComplete} deletar = {this.props.deletar}/></div>);      

    return (
      <div>
        {tasks} 
      </div>
    );

  }
}

export default Todo;
