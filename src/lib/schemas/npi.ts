import Joi from 'joi';

export const npiSchema = Joi.object({
	firstName: Joi.string().allow(''),
	lastName: Joi.string().allow(''),
	city: Joi.string().error(new Error('City cannot be empty')),
	state: Joi.string().min(2).max(2).error(new Error('State must be 2 characters'))
});
