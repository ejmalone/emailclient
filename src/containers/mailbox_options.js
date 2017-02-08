import { connect } from 'react-redux'
import MailboxOptions from '../components/mailbox_options'
import { archiveEmails, deleteEmails  } from '../actions'

const mapStateToProps = (state) => {
   return {
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onArchive: () => { console.log('on archive'); dispatch(archiveEmails()); },
      onDelete: () => dispatch(deleteEmails())
   }
}

const ReduxMailboxOptions = connect(
   mapStateToProps,
   mapDispatchToProps
)(MailboxOptions)

export default ReduxMailboxOptions
