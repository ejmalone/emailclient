import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxMailbox from './redux_mailbox'
import store from './store'

/*
import { loadMailbox, deleteEmail } from './actions'
console.log(store.getState());
store.dispatch(loadMailbox([{id: 1, from: 'foo@bar.com', subject: 'heyyyy'}, {id: 2, from: 'bob@jones.com', subject: 'yaaa'}]));
console.log(store.getState());
store.dispatch(deleteEmail(1));
console.log(store.getState());
*/

const element = <div id="mailbox"><Provider store={store}><ReduxMailbox /></Provider></div>

export default element;
