import { SERVER_ERROR } from '../actions'

const initialState = ''

export default function serverError(state = initialState, action) {

   switch (action.type) {

      case SERVER_ERROR:
         return action.serverError

      default:
         return state

   }

}
