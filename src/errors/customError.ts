export abstract class CustomError extends Error {
  //The abstract keyword means that this property is not implemented in the base class but must be implemented in any concrete subclass.
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // Ensure that methods defined in CustomError can be accessed from instances of its subclasses.
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
