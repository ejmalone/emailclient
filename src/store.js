import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import emailApp from './reducers'

let store = createStore(
   emailApp,
   applyMiddleware(
      thunkMiddleware
   )
);

export default store
