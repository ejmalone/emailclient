import { connect } from 'react-redux'
import Mailbox from '../components/mailbox'
import { loadMailbox } from '../actions'

const mapStateToProps = (state, ownProps) => {
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
