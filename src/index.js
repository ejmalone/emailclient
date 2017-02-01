import app from './app'
import ReactDom from 'react-dom'

var root = document.getElementById('mailbox-root');

if (root)
  ReactDom.render(app, root); 
