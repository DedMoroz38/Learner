import { createStore } from 'redux';
import { combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import wordsReducer from './words/reducer';
import loginReducer from "./login/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const allReducers = combineReducers({
    words: wordsReducer,
    loginStatus: loginReducer
});

const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;

