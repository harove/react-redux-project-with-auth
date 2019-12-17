import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {loginAsyncActionCreator } from '../../store/modules/actions';


const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const store = useSelector(store => store)
    const dispatch = useDispatch();

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsyncActionCreator({
            email,
            password,
        }))

    };

    return (
        <div className="login-form">
            <form onSubmit = {handlerOnSubmit}>
                <input type="email" value = {email} onChange = {({target})=>setEmail(target.value)}/>
                <input type="password" value = {password} onChange = {({target}) => setPassword(target.value)}/>
                <button>submit</button>
            </form>
            <pre>
                {JSON.stringify(store,undefined,2)}
            </pre>

        </div>
    )

};

export default LoginForm;


 