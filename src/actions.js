export const MAILBOX_LOADED = 'MAILBOX_LOADED';
export const SERVER_ERROR = 'SERVER_ERROR'
export const TOGGLE_EMAIL_SELECTION  = 'TOGGLE_EMAIL_SELECTION'

export function loadMailbox(emails) {
   
   return (dispatch, getState) => {

      $.ajax({
         url: '/messages.json'
      })
         .done((data, status) => {
            dispatch({ type: MAILBOX_LOADED, emails: data.messages })         
         })
         .fail((xhr, status, err) => {
         
         });
   }
}

export function setVisibilityFilter(filter) {
   return { type: SET_VISIBILITY_FILTER, filter }
}

export function serverError(serverError) {
   return { type: SERVER_ERROR, serverError }
}

export function toggleEmail(emailId) {
   return { type: TOGGLE_EMAIL_SELECTION, emailId }
}

function processEmails(endpoint) {

   return (dispatch, getState) => {
      
      let selectedEmailIds = getState().emails
                                 .filter((email) => email.selected ? email.id : null)
                                 .map((email) => email.id)
      
      if (selectedEmailIds.length == 0)
         return
   
      $.ajax({
         url: endpoint,
         method: 'PUT',
         data: {"emailIds": selectedEmailIds}
      })
         .done((data, status) => {
            dispatch(loadMailbox())
            console.log('response from ajax is', data, status);
         })
         .fail((xhr, status, err) => {
            dispatch(serverError('An error occurred. Please reload the page.'))
         })
   }
}

export function archiveEmails() {
   return processEmails('/messages/archive.json')
}

export function deleteEmails() {
   return processEmails('/messages/delete.json')
}
