import { SERVER_ERROR, CLIENT_ERROR } from '../actions/errors'

const initialState = {
   code: null,
   message: ''
}

export default function error(state = initialState, action) {

   switch (action.type) {

      case SERVER_ERROR:
         return Object.assign({}, state, {
            message: action.message
         })

      case CLIENT_ERROR:
         return Object.assign({}, state, {
            code: action.code,
            message: action.message
         })

      default:
         return state

   }

}
