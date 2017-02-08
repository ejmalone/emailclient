import React from 'react'

class MessageRow extends React.Component {

   constructor(props) {
      super(props)
   }

   render() {

      return (
         <tr>
            <td><input type="checkbox" onChange={(e) => this.props.onCheckEmail(this.props.message.id, e.target.checked)} /></td>
            <td>{this.props.message.from}</td>
            <td>{this.props.message.subject}</td>
         </tr>
      )
   }
}

export default MessageRow
