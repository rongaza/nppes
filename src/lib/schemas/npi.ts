import Joi from 'joi';

export const npiSchema = Joi.object({
	firstName: Joi.string(),
	lastName: Joi.string(),
	city: Joi.string(),
	state: Joi.string().length(2)
});
