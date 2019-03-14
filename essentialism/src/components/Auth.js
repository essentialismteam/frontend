import React, { Component } from 'react';

import { Login, Signup } from './index';

class Auth extends Component {
    state = {
        isNewUser: false
    }

    handleFormSwitch = e => {
        e.preventDefault();
        this.setState(prevState => ({
            isNewUser: !prevState.isNewUser
        }))
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.isNewUser 
                    ? <Signup />
                    : <Login />
                    }
                </div>
                <div>
                    <button
                    type='button'
                    onClick={this.handleFormSwitch}
                    >
                        {this.state.isNewUser
                        ? "Existing user? Log in here!"
                        : "New user? Register here!"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Auth;