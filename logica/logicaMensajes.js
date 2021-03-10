const Joi = require("joi");

const validateMessage = (message) => {
  const schema = Joi.object({
    message: Joi.string().min(5).required(),
    author: Joi.string()
      .pattern(/^[a-zA-Z]+\s[a-zA-Z]+$/)
      .required(),
  });

  return schema.validate(message);
};

exports.validateMessage = validateMessage;