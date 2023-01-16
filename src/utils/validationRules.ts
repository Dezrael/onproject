export const validationRules = {
    required: (message: string = 'Обязательное поле') => ({
        required: true,
        message,
    }),
};
