import { SERVER_ERROR } from '../actions/errors'

const initialState = ''

export default function serverError(state = initialState, action) {

   switch (action.type) {

      case SERVER_ERROR:
         return action.serverError

      default:
         return state

   }

}
