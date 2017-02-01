import React from 'react'

class MessageRow extends React.Component {

   constructor(props) {
      super(props)
   }

   render() {

      return (
         <tr>
            <td>{this.props.message.from}</td>
            <td>{this.props.message.subject}</td>
            <td><button onClick={() => this.props.onDeleteClick(this.props.message.id)}>delete</button></td>
         </tr>
      )
   }
}

export default MessageRow
