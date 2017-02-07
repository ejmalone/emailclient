import { VisibilityFilters, SET_VISIBILITY_FILTER, DELETE_EMAIL, MAILBOX_LOADED, SERVER_ERROR, SELECT_EMAIL, UNSELECT_EMAIL } from './actions'

const initialState = {
   visibilityFilter: VisibilityFilters.SHOW_ALL,
   emails: [],
   serverError: '',
   selectedEmails: []
}

function emailApp(state = initialState, action) {
   
   switch (action.type) {

      case MAILBOX_LOADED:
         return Object.assign({}, state, {
            emails: action.emails
         })

      case SET_VISIBILITY_FILTER:
         return Object.assign({}, state, {
            visibilityFilter: action.filter
         })
      
      case DELETE_EMAIL:
         return Object.assign({}, state, {
            emails: state.emails.filter((email) => email.id != action.id)
         })

      case SERVER_ERROR:
         return Object.assign({}, state, {
            serverError: action.serverError 
         })

      case SELECT_EMAIL:

         var selectedEmails = state.selectedEmails.slice()

         if (selectedEmails.indexOf(action.emailId) == -1)
            selectedEmails.push(action.emailId)

         return Object.assign({}, state, {
            selectedEmails: selectedEmails            
         })

      case UNSELECT_EMAIL:

         var selectedEmails = state.selectedEmails.slice().filter((id) => id != action.emailId)

         return Object.assign({}, state, {
            selectedEmails: selectedEmails
         })
   
      default:
         return state
   }

   return state
}

export default emailApp
