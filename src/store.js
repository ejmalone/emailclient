import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { emails, serverError, initialState } from './reducers'

let store = createStore(
   combineReducers({
      emails,
      serverError
   }),

   initialState,

   applyMiddleware(
      thunkMiddleware
   )
);

export default store
