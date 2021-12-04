const Joi = require('joi');

const addToFavotireValidation = data => {
    const schema = Joi.object().keys({
        name: Joi.string().min(2).required(),
        key: Joi.number().min(2).required(),
    })

    return schema.validate(data)
};

module.exports.addToFavotireValidation = addToFavotireValidation

