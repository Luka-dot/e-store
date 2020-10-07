import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitt pressed');

        this.setState({ email: '', password: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <label>EMAIL</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required />
                    <label>PASSWORD</label>

                    <input type='submit' value="Submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn;