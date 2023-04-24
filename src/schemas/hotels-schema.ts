import Joi from 'joi';

export const hotelsSchema = Joi.object({
  hotelId: Joi.number().integer().positive().required(),
});
