import React, { Component } from 'react';
import './Login_signup.css';  

export default class Login_signup extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true
        };
    }

    handleClick = () => {
        this.setState({ isLogin: !this.state.isLogin });
    };

    render() {
        return (
            <div className="container">
                {this.state.isLogin ? (
                    <div>
                        <h1>SignUp Page</h1>
                        <input type="email" id="loginEmail" placeholder="Email" />
                        <input type="password" id="loginPassword" placeholder="Password" />
                        <input type="password" id="loginConfirmPassword" placeholder="Confirm Password" />
                        <button>SignUp</button>
                    </div>
                ) : (
                    <div>
                        <h1>Login</h1>
                        <input type="email" id="loginEmail" placeholder="Email" />
                        <input type="password" id="loginPassword" placeholder="Password" />
                        <button>Login</button>
                    </div>
                )}
                <div className="switch-button">
                    <button onClick={this.handleClick}>
                        {this.state.isLogin ? 'Switch to Login' : 'Switch to SignUp'}
                    </button>
                </div>
            </div>
        );
    }
}
