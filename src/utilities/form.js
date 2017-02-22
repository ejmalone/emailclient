export function validateEmailAddress(email) {
   return typeof email == 'string' && email.match(/^[\w]+@[\w]+\.[\w]+$/)
}
