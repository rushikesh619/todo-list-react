import React, { Component } from 'react';



class Tasks extends Component {

    render() {
        return (
            <div>
                <ul>{this.state.lists.map((value, index) => <li key={index}>{value}</li>)}</ul>
                <button>Delete</button>
            </div>
        );
    }
}

export default Tasks;