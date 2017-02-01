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
      onFetched: (emails) => {
         dispatch(loadMailbox(emails))
      }
   }
}

const ReduxMailbox = connect(
   mapStateToProps,
   mapDispatchToProps
)(Mailbox)

export default ReduxMailbox
