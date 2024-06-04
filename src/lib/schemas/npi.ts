import Joi from 'joi';

export const npiSchema = Joi.object({
	firstName: Joi.string()
		.pattern(/^[a-zA-Z*]*$/)
		.error(new Error('firstname letters or * only'))
		.allow(''),
	lastName: Joi.string()
		.pattern(/^[a-zA-Z*]*$/)
		.allow('')
		.error(new Error('lastname letters or * only')),
	// city: Joi.string().error(new Error('City cannot be empty')),
	city: Joi.string()
		.pattern(/^[a-zA-Z\s]*$/)
		.required()
		.messages({
			'string.empty': 'City cannot be empty',
			'string.pattern.base': 'City can only contain letters and spaces',
			'any.required': 'City is required'
		}),

	state: Joi.string().min(2).max(2).error(new Error('State must be 2 characters'))
});
