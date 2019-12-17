import {
  AUTH_LOGIN_START,
  AUTH_LOGIN_OK,
  AUTH_LOGIN_NOK,
  AUTH_LOGOUT
} from "./const";

import parseJwt from '../../utils/parseJWT';

const ls = window.localStorage;

const initialState = {
  isLogin: !!ls.getItem("token"),
  token: !!ls.getItem("token") ? ls.getItem("token") : '',
  loading: false,
  success: false,
  error: false,
  errorMessage: "",
  jwt: !!ls.getItem("token") ? parseJwt(ls.getItem("token")) : '',
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return {
        ...prevState,
        isLogin: false,
        loading: true,
        success: false,
        error: false
      };

    case AUTH_LOGIN_OK:
      ls.setItem("token", action.payload);
      const jwt = parseJwt(action.payload);
      return {
        ...prevState,
        isLogin: true,
        token: action.payload,
        loading: false,
        success: true,
        error: false,
        jwt:jwt,
      };

    case AUTH_LOGIN_NOK:
      return {
        ...prevState,
        isLogin: false,
        loading: false,
        success: false,
        error: true,
        errorMessage: action.payload
      };

    case AUTH_LOGOUT:
      ls.removeItem("token");
      return {
        ...prevState,
        isLogin: false,
        loading: false,
        success: false,
        error: false
      };

    default:
      return prevState;
  }
};

export default reducer;
