import { MAILBOX_LOADED, TOGGLE_EMAIL_SELECTION } from '../actions/mailbox'

const initialState = []

export default function emails(state = initialState, action) {

   switch (action.type) {

      case MAILBOX_LOADED:
         return action.emails
      
      case TOGGLE_EMAIL_SELECTION:

         return state.map((email) => {
            
            if (email.id == action.emailId) {
               return Object.assign({}, email, {
                  selected: email.selected ? false : true
               })

            }

            return email
         })

      default:
         return state

   }
}
