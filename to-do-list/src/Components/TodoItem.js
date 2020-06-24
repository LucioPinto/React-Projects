import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './TodoItem.css';

export class TodoItem extends Component {
  
  getStyle = () => {
    return (this.props.tarefa.completed ? {paddingLeft: "15px", paddingRight: "15px",textDecoration: 'line-through'} : {paddingLeft: "15px", paddingRight: "15px"});
  }

  bntStyle = () => {
    return {
      background: "none",
      border: "none"
    }
  }

  render(){
    const {id, title, completed} = this.props.tarefa;
    
    return (
      <div style={this.getStyle()}>
        <p>                
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}>
          </input>
          {title}
        	<button style={this.bntStyle()} onClick={this.props.deletar.bind(this, id)}>
            <img id='lixeira' alt=""></img>
          </button>
        </p>         
      </div>      
    );

  }
}

TodoItem.propTypes = {
  tarefa: PropTypes.object.isRequired
}

export default TodoItem;
