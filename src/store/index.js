import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialState = {
    city: "Barquisimeto, VE"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store  = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));                 
