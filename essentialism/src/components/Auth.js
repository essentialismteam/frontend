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
        console.log(this.state.isNewUser);
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
                        New user? Click here!
                    </button>
                </div>
            </div>
        )
    }
}

export default Auth;