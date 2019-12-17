import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './modules/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk,logger));


export default store;
