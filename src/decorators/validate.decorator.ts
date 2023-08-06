import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export function validateInput(validationClass: any) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const inputData = plainToClass(validationClass, args[0]);
      const validationErrors = await validate(inputData);

      if (validationErrors.length > 0) {
        console.warn(`Validation error, skipping offer`);
        return;
      }

      return originalMethod.apply(this, args);
    };
  };
}
