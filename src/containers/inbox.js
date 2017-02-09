import { connect } from 'react-redux'
import Inbox from '../components/inbox'

const mapStateToProps = (state, ownProps) => {
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

export default ReduxInbox
