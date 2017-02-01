import { VisibilityFilters, SET_VISIBILITY_FILTER, DELETE_EMAIL, LOAD_MAILBOX, SERVER_ERROR } from './actions'

const initialState = {
   visibilityFilter: VisibilityFilters.SHOW_ALL,
   emails: [],
   serverError: ''
}

function emailApp(state = initialState, action) {
   
   switch (action.type) {

      case LOAD_MAILBOX:
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
         console.log('server error reduced', action);
         return Object.assign({}, state, {
            serverError: action.serverError 
         })
   
      default:
         return state
   }

   return state
}

export default emailApp
