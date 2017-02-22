import { connect } from 'react-redux'
import Mailbox from '../components/mailbox'
import { loadMailbox } from '../actions/mailbox'

const mapStateToProps = (state, ownProps) => {
   return {
      emails: state.emails,
      errorMessage: state.error.message
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
