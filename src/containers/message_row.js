import { connect } from 'react-redux'
import MessageRow from '../components/message_row'
import { deleteEmail, toggleEmail } from '../actions/mailbox'


const mapStateToProps = (state) => {
   return {}
}

const mapDispatchToProps = (dispatch) => {
   
   return {
      onToggleEmail: (emailId) => {
         console.log('checking email id', emailId);

         dispatch(toggleEmail(emailId));
      }
   }
}

const ReduxMessageRow = connect(
   mapStateToProps,
   mapDispatchToProps
)(MessageRow)

export default ReduxMessageRow
