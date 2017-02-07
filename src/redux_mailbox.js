import Mailbox from './mailbox'
import { connect } from 'react-redux'
import { loadMailbox } from './actions'

const mapStateToProps = (state) => {
   return {
      emails: state.emails,
      serverError: state.serverError
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      loadMailbox: () => {
         dispatch(loadMailbox())
      }
   }
}

const ReduxMailbox = connect(
   mapStateToProps,
   mapDispatchToProps
)(Mailbox)

export default ReduxMailbox
