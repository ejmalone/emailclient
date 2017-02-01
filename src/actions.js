export const LOAD_MAILBOX = 'LOAD_MAILBOX';
export const DELETE_EMAIL = 'DELETE_EMAIL';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SERVER_ERROR = 'SERVER_ERROR'

export const VisibilityFilters = {
   SHOW_ALL: 'SHOW_ALL',
   SHOW_UNREAD: 'SHOW_UNREAD',
   SHOW_DELETED: 'SHOW_DELETED'
}

export function loadMailbox(emails) {
   return { type: LOAD_MAILBOX, emails }
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
