import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export const ValidationExceptionFactory = (errors: ValidationError[]) => {
    const errMsg = {};
    errors.forEach((error: ValidationError) => {
        errMsg[error.property] = Object.values(error.constraints)[0];
    });
    return new BadRequestException(errMsg);
};

export const NestedValidationExceptionFactory = (errors: ValidationError[]) => {
    const formatError = (errors: ValidationError[]) => {
        const errMsg = {};
        errors.forEach((error: ValidationError) => {
            errMsg[error.property] = error.children.length
                ? [formatError(error.children)]
                : [...Object.values(error.constraints)];
        });
        return errMsg;
    };
    return new BadRequestException(formatError(errors));
};
