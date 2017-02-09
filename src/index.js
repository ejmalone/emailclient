import React from 'react'
import ReactDom from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import Mailbox from './containers/mailbox'
import Inbox from './containers/inbox'
import Compose from './components/compose'

import reducers from './reducers'

reducers.routing = routerReducer

const reducer = combineReducers(reducers)

const store = createStore(
   reducer,
   applyMiddleware(thunkMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render((
   <Provider store={store}>
      <Router history={history}>
         <Route path="/" component={Mailbox}>
            <IndexRoute component={Inbox} />
            <Route path="compose" component={Compose} />
         </Route>
      </Router>
   </Provider>
), document.getElementById('mailbox-root'))
