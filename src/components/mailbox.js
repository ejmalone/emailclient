import React from 'react'
import { Link } from 'react-router'
import Inbox from '../containers/inbox'
import { loadMailbox } from '../actions'

class Mailbox extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.loadMailbox()
   }

   render() {
      return (
         <div className="container">
            
            {
               this.props.serverError &&
               <div className="col-xs-12 alert alert-danger">{this.props.serverError}</div>
            }

            <div className="col-sm-2">
               <ul>
                  <li>
                     <Link to="/compose" className="btn">new</Link>
                  </li>
                  <li>inbox ({this.props.emails.length})</li>
                  <li>sent</li>
                  <li>drafts</li>
               </ul>
            </div>
        
            <div className="col-sm-10">
               <Inbox emails={this.props.emails} /> 
            </div>
         </div>
      )
   }
}

export default Mailbox
