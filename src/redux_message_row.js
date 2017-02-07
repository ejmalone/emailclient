import { connect } from 'react-redux'
import MessageRow from './message_row'
import { deleteEmail, selectEmail, unselectEmail } from './actions'


const mapStateToProps = (state) => {
   return {}
}

const mapDispatchToProps = (dispatch) => {
   
   return {
      onCheckEmail: (emailId, isChecked) => {
         console.log('checking email id', emailId);

         if (isChecked)
            dispatch(selectEmail(emailId));
         else
            dispatch(unselectEmail(emailId));
      }
   }
}

const ReduxMessageRow = connect(
   mapStateToProps,
   mapDispatchToProps
)(MessageRow)

export default ReduxMessageRow
