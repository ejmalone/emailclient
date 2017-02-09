import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import * as reducers from './reducers'

reducers.routing = routerReducer

let store = createStore(
   combineReducers(reducers),

   applyMiddleware(thunkMiddleware)
);

export default store
