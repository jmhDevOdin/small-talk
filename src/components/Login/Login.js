import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../utils/reducer';
import { useStateValue } from '../../utils/StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fcommunication-360%2F100%2FChat_coffee-512.png&f=1&nofb=1' alt='login logo' />
                <h1>Small Talk</h1>
                <Button type='submit' onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login;
