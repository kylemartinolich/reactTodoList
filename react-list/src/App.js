import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import DeleteMessage from './DeleteMessage'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todolist: ['item2'],
            completeList: [],
            task: '',
            lastDelete: ''
        }
    }
    render(){
        return (
            <div className="App">
                <div class="alert alert-danger" role="alert">
                    <h1>To-Do List</h1>
                </div>
                <div id='delete'>
                    <DeleteMessage deleted = {this.state.lastDelete}/>
                </div>
                <form onSubmit={(e) => this.addTodo(e)}>
                <input class="form-control input" type="text" placeholder='Enter an item...' value={this.state.task}
                    onChange={
                            (e) => this.setState({task: e.target.value})
                    }
                />
                <button type="submit" class="btn btn-success">Add Todo</button>
                </form>
                <div id='wrapper'>
                    <div id='on-list'>
                        <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todolist} buttonFunction={this.removeTodo}/>
                    </div> 
                    <div id='comp-list'> 
                        <TaskList title={'Completed'} buttonText={'Delete'}tasks={this.state.completeList} buttonFunction={this.deleteTodo}/>
                    </div>
                </div>
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        console.log(this.state.task);
        this.setState({task: '', todolist:[ ...this.state.todolist, this.state.task]});
    }
    removeTodo = key =>{
        console.log(key);
        let todolist=this.state.todolist;
        let index = todolist.indexOf(key);
        let completeList = this.state.completeList;
        if(index > -1){
            todolist.splice(index,1);
            completeList.push(key);
        }
        this.setState({todolist: todolist, completeList:completeList});
        
    }
    deleteTodo = key =>{
        console.log(key);
        
        let completeList = this.state.completeList;
        let index = completeList.indexOf(key);
        if(index > -1){
            completeList.splice(index,1);
            console.log(key+" deleted.")
            let lastDelete = key;
            if (lastDelete != ''){
                lastDelete = lastDelete+' deleted...';
                this.setState({lastDelete:lastDelete});
            }
            
        }
        this.setState({ completeList:completeList});
    }
}

export default App;
