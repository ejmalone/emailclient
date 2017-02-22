import { connect } from 'react-redux'
import Compose from '../components/compose'
import { updateComposingEmail, submitComposingEmail } from '../actions/compose'
import { clientError } from '../actions/errors'

const mapStateToProps = (state) => {

   return {
      composingEmail: state.composingEmail,
      errorCode: state.error.code
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      handleChange: (field, value) => {
         dispatch(updateComposingEmail(field, value))
      },

      submit: (email) => {
         dispatch(submitComposingEmail(email))
      },

      setError: (errorCode, message = '') => {
         dispatch(clientError(errorCode, message))
      }
   }
}

const ReduxCompose = connect(
   mapStateToProps,
   mapDispatchToProps
)(Compose)

export default ReduxCompose 
