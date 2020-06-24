import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo.js';
import AddTodo from './Components/AddTodo.js';
//import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/layout/Header.js';
import About from './Components/pages/About.js';
import axios from 'axios';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      tarefas: [
        
      ]
    };    
  }

  markComplete = (id) => {
    this.setState({
      tarefas: this.state.tarefas.map( itemTarefa => {
        if(itemTarefa.id === id){
          itemTarefa.completed = !(itemTarefa.completed);
        }
        return itemTarefa;
      })

    });
  }

  deletar = (id) => {
    /*
    this.setState({
      tarefas: [...this.state.tarefas.filter( 
      	itemTarefa => itemTarefa.id !== id
      )]
    });
    */
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => this.setState({
      tarefas: [...this.state.tarefas.filter( 
        itemTarefa => itemTarefa.id !== id
      )]
    }))
  }

  adicionar = (title) => {
    /*
  	const newTodo = {
  		id: uuid.v4(),
  		title: title,
  		completed: false
  	}
    this.setState({
      tarefas: [...this.state.tarefas, newTodo]
    });
    */
    axios.post('https://jsonplaceholder.typicode.com/todos',{title: title, completed: false}).then(response => {this.setState({
      tarefas: [...this.state.tarefas, response.data]
    })
  })
  }

  componentDidMount (){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(response => this.setState({tarefas: response.data}));
  }

  render(){

    return (
      <Router>        
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo adicionar = {this.adicionar}/>
              <Todo tarefas={this.state.tarefas} markComplete = {this.markComplete} deletar = {this.deletar}/>          
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>            
        </div>
      </Router>  
    );

  }
}

export default App;

