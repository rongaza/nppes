import Joi from 'joi';

export const npiSchema = Joi.object({
	firstName: Joi.string().allow(''),
	lastName: Joi.string().allow(''),
	city: Joi.string().allow(''),
	state: Joi.string().length(2).error(new Error('State must be 2 characters'))
});
