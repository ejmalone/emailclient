import React from 'react'

import { validateEmailAddress } from '../utilities/form'
import { COMPOSE_ERROR_ADDRESS } from '../constants'

class Compose extends React.Component {
   
   onSubmit(event) {
      
      event.preventDefault()

      if (!this.validate())
         return

      this.props.submit(this.props.composingEmail)
   }

   validate() {
      
      if (!validateEmailAddress(this.props.composingEmail.email)) {
         this.props.setError(COMPOSE_ERROR_ADDRESS, 'email address is invalid')
         return false
      }

      return true
   }

   render() {
      return (
         <form id="compose-email" onSubmit={(e) => this.onSubmit(e)}>
            <div className={"form-group " + (this.props.errorCode == COMPOSE_ERROR_ADDRESS ? 'has-error' : '')}>
               <label htmlFor="email-address">Email address</label>
               <input type="email" className="form-control" id="email-address" placeholder="email" 
                      onChange={(e) => this.props.handleChange('email', e.target.value)} />
            </div>
            
            <div className="form-group">
               <label htmlFor="email-subject">Subject</label>
               <input type="text" className="form-control" id="email-subject" placeholder="subject..."
                      onChange={(e) => this.props.handleChange('subject', e.target.value)} />
            </div>

            <div className="form-group">
               <label htmlFor="email-body">Contents</label>
               <textarea className="form-control" id="email-body" placeholder="write here"
                         onChange={(e) => this.props.handleChange('body', e.target.value) }></textarea>
            </div>

            <button type="submit" className="btn btn-default">Send</button>
         </form>
      )
   }
}

export default Compose
