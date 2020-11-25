import React, { Component } from 'react';


import './Todo.css';



class Todo extends Component {
    constructor() {
        super();
        this.state = {
            Todo: []
        }
    }
    addActivity = () => {
        const newItem = document.getElementById("activity").value;
        this.setState({ Todo: [...this.state.Todo, newItem] });
        document.getElementById("activity").value = " ";
    }
    resetList = () => {

        this.setState({ Todo: [] });

    }

    deleteItem = (i) => {
        var ary = this.state.Todo.filter((a, index) => {
            if (index !== i) {
                return true;
            } else {
                return false;
            }
        });
        this.setState({ Todo: ary });
    }

    renderTodoItem() {
        let toDOItems = [];

        for (let i = 0; i < this.state.Todo.length; i++) {
            toDOItems.push(<li className="list-group-item" key={i}>{this.state.Todo[i]} <span className="badge badge-danger" onClick={() => this.deleteItem(i)}>X</span></li>);
        }

        return toDOItems;
    }



    render() {
        return (
            <div>

                < div className="container" >
                    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                        <div className="totalTasks-container">
                            <a className="navbar-brand" href="#" font->Total tasks <span className="badge badge-dark m-2   "> {this.state.Todo.length} </span> </a>
                        </div>
                    </nav>
                </div >
                <div>
                    <button onClick={this.resetList} type="button" className=" reset btn btn-primary m-4 float-right " >Reset</button>
                </div>
                <h1 className="font-weight-bold">ToDo List</h1>

                <ul>{this.renderTodoItem()}</ul>
                <div className="add-activity-container">
                    <div className="add-activity">
                        <label >Add Activity:</label>
                        <input type="text" placeholder="Activity" id="activity" name="type here" ref="doTask" />
                        <button onClick={this.addActivity} type="button" className="btn btn-secondary m-2">Submit</button>
                    </div>
                </div>

            </div >
        );
    }
}

export default Todo;