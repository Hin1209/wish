import React from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';


function Login() {
    return (
        <div className='Login'>
            <div className='InputID'>
                ID : <input type="email" className='myID'></input>
            </div>
            <div className='InputPW'>
                PW : <input type="password" className='myPW'></input>
            </div>
            <Button type="submit">
                Login
            </Button>{' '}
        </div>
    );
}

export default Login;