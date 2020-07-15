import React, {Component} from 'react';
import './App.css';
import Done from './Components/Done.js';
import AddDone from './Components/AddDone.js';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/layout/Header.js';
import About from './Components/pages/About.js';
import Footer from './Components/layout/Footer.js';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      tarefas: [
        
      ]
    };    
  }  

  deletar = (id) => {
    
    this.setState({
      tarefas: [...this.state.tarefas.filter( 
      	itemTarefa => itemTarefa.id !== id
      )]
    });
  }

  adicionar = (title) => {
    
  	const newTodo = {
  		id: uuid.v4(),
  		title: title
  	}
    this.setState({
      tarefas: [...this.state.tarefas, newTodo]
    });    
  }  

  doneStyle = () => {
    return {
      marginBottom: "20px", 
      padding: "10px"
    }
  }

  render(){

    return (
      <Router>        
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddDone adicionar = {this.adicionar}/>
              <div className="Done" style={this.doneStyle()} >
                <Done tarefas={this.state.tarefas} deletar = {this.deletar}/> 
              </div>         
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
          <Footer />            
        </div>
      </Router>  
    );

  }
}

export default App;

