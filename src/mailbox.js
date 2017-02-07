import React from 'react'
import ReduxMailboxOptions from './redux_mailbox_options'
import ReduxMessageRow from './redux_message_row'
import store from './store'
import { loadMailbox } from './actions'

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
                  <li>inbox ({this.props.emails.length})</li>
                  <li>sent</li>
                  <li>drafts</li>
               </ul>
            </div>
        
            <div className="col-sm-10">
               <ReduxMailboxOptions />
               <table>
                  <thead>
                     <tr>
                        <th></th>
                        <th>From</th>
                        <th>Subject</th>
                     </tr>
                  </thead>
                  
                  <tbody>
                     {this.props.emails.map((message) => 
                        <ReduxMessageRow key={message.id.toString()}
                                    message={message} />
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      )
   }
}

export default Mailbox
