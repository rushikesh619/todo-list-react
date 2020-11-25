import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*function Demo({ lName }) {
    return <div className="nav">
        <h1> hellow rishi {lName} </h1>
    </div>
}*/

class Array extends Component {
    state = { ary: ["tag1", "tag2", "tag3"] };

    renderAry() {
        return <div>
            <ul>{this.state.ary.map(ary => <li>{ary}</li>)}</ul>
            <p>rendered from function</p>
        </div>

    }

    render() {
        return (
            <div>
                {this.state.ary.length === 0 && 'please enter the element in array'}
                {this.renderAry()}
            </div>
        );
    }
}

export default Array;



