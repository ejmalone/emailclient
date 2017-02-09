import React from 'react'
import { Link } from 'react-router'

class Mailbox extends React.Component {

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
                     {
                        <Link to="/compose" className="btn">new</Link>
                     }
                  </li>
                  <li><Link to="/">inbox ({this.props.emails.length})</Link></li>
                  <li>sent</li>
                  <li>drafts</li>
               </ul>
            </div>
        
            <div className="col-sm-10">
               {this.props.children}
            </div>
         </div>
      )
   }
}

export default Mailbox
