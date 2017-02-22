export const SERVER_ERROR = 'SERVER_ERROR'
export const CLIENT_ERROR = 'CLIENT_ERROR'


export function serverError(message) {
   return { type: SERVER_ERROR, message }
}

export function clientError(code, message) {
   return { type: CLIENT_ERROR, code, message }
}
