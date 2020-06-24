import React, {Component} from 'react';

export class AddTodo extends Component {

	state = {
		title:''
	}

	changeInput = (e) => {
		this.setState({title: e.target.value});
	}

	
	onSubmit = (evento) => {
		evento.preventDefault();
		this.props.adicionar(this.state.title);
		this.setState({title: ""});
	} 

	render(){
		return (
			<form style = {{margin: "50px"}} onSubmit={this.onSubmit}>
				<input
					type= "text"
					name= "newText"
					value= {this.state.title}
					placeholder= "New task:"
					onChange={this.changeInput}
				></input>
			
			</form>
		);
	}

}

export default AddTodo;