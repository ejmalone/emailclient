export const LOAD_MAILBOX = 'LOAD_MAILBOX';
export const MAILBOX_LOADED = 'MAILBOX_LOADED';
export const DELETE_EMAIL = 'DELETE_EMAIL';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SERVER_ERROR = 'SERVER_ERROR'
export const SELECT_EMAIL  = 'SELECT_EMAIL'
export const UNSELECT_EMAIL = 'UNSELECT_EMAIL'

export const VisibilityFilters = {
   SHOW_ALL: 'SHOW_ALL',
   SHOW_UNREAD: 'SHOW_UNREAD',
   SHOW_DELETED: 'SHOW_DELETED'
}

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

export function deleteEmail(id) {
   
   return (dispatch, getState) => {

      dispatch({ type: DELETE_EMAIL, id });
      
      $.ajax({
         url: '/messages/' + String(id) + '.json',
         method: 'DELETE',
      })
         .done((data, status) => {
            console.log('response from ajax is', data, status);
         })
         .fail((xhr, status, err) => {
            dispatch(serverError('An error occurred. Please reload the page.'))
         })
      
   }
}

export function setVisibilityFilter(filter) {
   return { type: SET_VISIBILITY_FILTER, filter }
}

export function serverError(serverError) {
   return { type: SERVER_ERROR, serverError }
}

export function selectEmail(emailId) {
   return { type: SELECT_EMAIL, emailId }
}

export function unselectEmail(emailId) {
   return { type: UNSELECT_EMAIL, emailId }
}

export function archiveEmails() {
   
   return (dispatch, getState) => {
      
      let selectedEmails = getState().selectedEmails;
      
      if (selectedEmails.length == 0)
         return
   
      $.ajax({
         url: '/messages/archive.json',
         method: 'PUT',
         data: {"emailIds": selectedEmails}
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
