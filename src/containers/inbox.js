import { connect } from 'react-redux'
import Inbox from '../components/inbox'
import { loadMailbox } from '../actions'

const mapStateToProps = (state) => {
   return {
      emails: state.emails
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
   }
}

const ReduxInbox = connect(
   mapStateToProps,
   mapDispatchToProps
)(Inbox)

export default Inbox
