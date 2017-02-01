import { connect } from 'react-redux'
import MessageRow from './message_row'
import { deleteEmail } from './actions'


const mapStateToProps = (state) => {
   return {}
}

const mapDispatchToProps = (dispatch) => {
   
   return {
      onDeleteClick: (id) => {
         console.log('onDeleteClick', id);
         dispatch(deleteEmail(id));
      }
   }
}

const ReduxMessageRow = connect(
   mapStateToProps,
   mapDispatchToProps
)(MessageRow)

export default ReduxMessageRow
