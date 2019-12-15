import React, {useState} from 'react';
import {login} from '../../client/auth.client'

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const handlerOnSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        login({
            email,
            password,
        })

    };

    return (
        <div className="login-form">
            <form onSubmit = {handlerOnSubmit}>
                <input type="email" value = {email} onChange = {({target})=>setEmail(target.value)}/>
                <input type="password" value = {password} onChange = {({target}) => setPassword(target.value)}/>
                <button>submit</button>
            </form>

        </div>
    )

};

export default LoginForm;


 