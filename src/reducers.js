import { MAILBOX_LOADED, SERVER_ERROR, TOGGLE_EMAIL_SELECTION } from './actions'

const initialState = {
   emails: [],
   serverError: '',
}

export function emails(state = [], action) {

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

export function serverError(state = '', action) {

   switch (action.type) {

      case SERVER_ERROR:
         return action.serverError

      default:
         return state

   }

}
