import React from 'react'
import { Provider } from 'react-redux'
import Mailbox from '../containers/mailbox'
import store from '../store'

const element = <div id="mailbox"><Provider store={store}><Mailbox /></Provider></div>

export default element;
