import React from 'react'

class MailboxOptions extends React.Component {

   constructor(props) {
      super(props)
   }

   render() {
   
      return (
         
         <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={() => this.props.onArchive()}>archive</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.props.onDelete()}>delete</button>
         </div>
      )

   }
}

export default MailboxOptions
