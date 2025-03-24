class ValidationError extends Error {
    validationErrors: any[];

    constructor(message: string, validationErrors: any[]) {
        super(message);
        this.name = 'ValidationError';
        this.validationErrors = validationErrors;
    }
}
export default ValidationError