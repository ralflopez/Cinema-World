import joi from 'joi';

const login = joi.object({
    name: joi.string().min(2),
    email: joi.string().min(4).required(),
    password: joi.string().min(8).required()
});

const signup = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().min(4).required(),
    password: joi.string().min(8).required()
});

export { login, signup };