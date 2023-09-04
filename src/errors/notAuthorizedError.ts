import { CustomError } from './customError';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    //calls the constructor of the parent CustomError class with the message "Not Authorized" to set the error message.
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
