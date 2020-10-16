const Joi = require('joi');
const addNewSchema = Joi.object({
    judul: Joi.string()
    .min(5)
    .max(50)
    .required(),
    content: Joi.string()
    .min(20)
    .max(100)
    .required(),
    author: Joi.string()
    .min(5)
    .max(30)
    .required(),
    category: Joi.string()
    .min(5)
    .required(),
});

module.exports = addNewSchema;