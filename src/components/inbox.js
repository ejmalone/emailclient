import React from 'react'
import MailboxOptions from '../containers/mailbox_options'
import MessageRow from '../containers/message_row'

class Inbox extends React.Component {

   render() {
      return (
         <div id="inbox">

            <MailboxOptions />
            {
               this.props.emails.length > 0 && 

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
                        <MessageRow key={message.id.toString()}
                                    message={message} />
                     )}
                  </tbody>
               </table>
            }
            { 
               !this.props.emails.length &&

               <div>No emails</div>
            }
         </div>
      )
   }
}

export default Inbox
