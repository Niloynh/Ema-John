import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation() 
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="Email"/>
                <br />
                <input type="password" name="" id="" placeholder="Password"/>
                <br />
                <input type="submit" value="submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
                <div>------------or------------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;