import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props)
        let loggedin = false
        this.state = {
            usrename: '',
            password: '',
            loggedin
        }
    }

    submitform = (e) => {
        e.preventDefault()
        const {
            usrename, password
        } = this.state
    }

    onchange = (e) => {
        this.setstate({
            [e.target.name]: e.target.value
        })


    }

    render() {
        return (
            <div>
                <h1> Login </h1>
                <form onSubmit={this.submitform}>
                    <input type="text" placeholder="username" name="username" value={this.state.usrename} onClick={this.change} />
                    <br />
                    <input type="text" placeholder="password" name="password" value={this.state.password} onClick={this.change} />
                    <br />
                    <input type="submit" />
                </form >
            </div >
        );
    }
}

export default Signup;