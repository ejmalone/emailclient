import { SERVER } from '../constants'
import { serverError } from './errors'
import { loadMailbox } from './mailbox'

export const COMPOSING_EMAIL = 'COMPOSING_EMAIL'
export const COMPOSE_ERROR   = 'COMPOSE_ERROR'
export const EMAIL_CREATED   = 'EMAIL_CREATED'

export function updateComposingEmail(field, value) {
   return { type: COMPOSING_EMAIL, field, value }
}

function emailCreated() {
   return { type: EMAIL_CREATED }
}

export function submitComposingEmail(email) {

   return (dispatch, getState) => {
      
      return new Promise((resolve, reject) => {

         $.ajax({
            url: `${SERVER}/messages.json`,
            method: 'POST',
            data: {
               'message[to]': email.email,
               'message[subject]': email.subject,
               'message[message]': email.body
            }
         })
            .done((data, status) => {
               dispatch(emailCreated())         

               // todo: get back to index route and reload mailbox
               
            })
            .fail((xhr, status, err) => {
               dispatch(serverError(err)) 
            });
      })

   }
}

export function composingEmailError(errorCode) {
   return { type: COMPOSE_ERROR, errorCode }
}
