const Joi = require('joi');

//Register validation
const registerValidation = data => {
    const schema = Joi.object().keys({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6).required(),
        address: Joi.string(),
        isActive: Joi.boolean(),
        role:Joi.string().required()
    });
    return Joi.validate(data, schema);
}

//login validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}

//product validation
const productValidation = (data) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        description: Joi.string().min(6).required(),
        price: Joi.number().required(),
        brand: Joi.string().min(1).required(),
        createdBy: Joi.string().required(),
        category: Joi.string().required(),
        isActive: Joi.boolean().required()
    });

    return Joi.validate(data, schema);
}

//category validation
const categoryValidation = (data) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        description: Joi.string().min(6).required()

    });

    return Joi.validate(data, schema);
}

const orderVaildation = (data) => {
    const schema = Joi.object().keys({
        ProductId: Joi.string().required(),
        Price: Joi.number().required(),
        Quantity: Joi.number().required(),
        TotalAmount: Joi.number().required(),
        createdBy: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        Phone: Joi.number().required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
    });
    return Joi.validate(data, schema);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.productValidation = productValidation;
module.exports.categoryValidation = categoryValidation;
module.exports.orderVaildation = orderVaildation;
