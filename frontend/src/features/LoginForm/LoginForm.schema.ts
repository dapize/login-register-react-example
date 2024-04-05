import Joi from "joi";

export const LoginFormSchema = Joi.object({
  email: Joi.string().max(50).email({ tlds: false }).required(),
  password: Joi.string().alphanum().min(3).max(50).required(),
  remember: Joi.boolean().optional(),
});

//  password: Joi.string().min(7).required().strict(),
// confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
// password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
