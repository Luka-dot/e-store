import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-imput/form-imput.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSingInStart, emailSingInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ emailSingInStart, googleSingInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSingInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    };

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSingInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSingInStart: () => dispatch(googleSingInStart()),
    emailSingInStart: (email, password) => dispatch(emailSingInStart({ email, password }))
});


export default connect(null, mapDispatchToProps)(SignIn);