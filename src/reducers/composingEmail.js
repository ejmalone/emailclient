import { EMAIL_CREATED, COMPOSING_EMAIL } from '../actions/compose'

const initialState = {
   email: '',
   subject: '',
   body: ''
}

export default function updateComposingEmail(state = initialState, action) {

   switch (action.type) {

      case COMPOSING_EMAIL:
         const newState = {}
         newState[action.field] = action.value

         return Object.assign({}, state, newState)

      case EMAIL_CREATED: // resets 'compose' state
      default:
         return state

   }
   
}
