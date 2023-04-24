import { Router } from 'express';
import { authenticateToken, validateParams } from '@/middlewares';
import hotelsController from '@/controllers/hotels-controller';
import { hotelsSchema } from '@/schemas/hotels-schema';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', hotelsController.getAllHotels)
  .get('/:hotelId', validateParams(hotelsSchema), hotelsController.getHotelById);

export { hotelsRouter };
