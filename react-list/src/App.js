import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todolist: null
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-Do List</h1>
                <input></input>
                <button onClick={() => this.addTodo()}>Add Todo</button>
                <div>
                    {this.state.todolist}                
                </div>
                <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todolist} buttonFunction={this.removeTodo()}/>
                <TaskList title={'Completed'} buttonText={'Delete'}tasks={'done'} buttonFunction={this.removeTodo()}/>
            </div>
        );
    }
    addTodo(){
        console.log('Test');
        this.setState({todolist: 'item1'});
    }
    removeTodo(){
        this.setState({todolist:null});
    }
}

export default App;
