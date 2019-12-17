import {
  AUTH_LOGIN_START,
  AUTH_LOGIN_OK,
  AUTH_LOGIN_NOK,
  AUTH_LOGOUT
} from "./const";

import { login } from '../../client/auth.client';

const loginStartActionCreator = () => ({
  type: AUTH_LOGIN_START,
  payload: null
});

const loginOkActionCreator = token => ({
  type: AUTH_LOGIN_OK,
  payload: token
});

const loginNokActionCreator = error => ({
  type: AUTH_LOGIN_OK,
  payload: error,
});

export const loginAsyncActionCreator = (user) => {
        return (dispatch,getStore) => {
            dispatch(loginStartActionCreator);
            login(user)
                .catch(error => dispatch(loginNokActionCreator('Error:',error)))
                .then(response => {
                    console.log(response.data)
                    if (response.message !== 'success') {
                        dispatch(loginOkActionCreator('Error: generico'))
                    }else {
                        console.log(response.data)
                        dispatch(loginOkActionCreator(response.data))
                    } 
                });
        };
};


export const logoutActionCreator = () => ({
    type: AUTH_LOGOUT,
    payload:null,
});