import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './DoneItem.css';

export class DoneItem extends Component {
  
  render(){
    const {id, title} = this.props.tarefa;
    
    return (
             
      <div className="GridItem">
        <p>{title}</p>        
        <button className="BntLixeira" onClick={this.props.deletar.bind(this, id)}>
          <img id='lixeira' alt=""></img>
        </button>                        
      </div>      
    );

  }
}

DoneItem.propTypes = {
  tarefa: PropTypes.object.isRequired
}

export default DoneItem;
