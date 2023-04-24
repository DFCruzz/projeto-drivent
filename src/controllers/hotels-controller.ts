import httpStatus from 'http-status';
import { NextFunction, Response } from 'express';
import hotelsService from '@/services/hotels-service';
import { AuthenticatedRequest } from '@/middlewares';

async function getAllHotels(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  try {
    const hotels = await hotelsService.getAllHotels(userId);

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    next(error);
  }
}

async function getHotelById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const hotelId = Number(req.params.hotelId);
  const { userId } = req;

  try {
    const hotel = await hotelsService.getHotelById(hotelId, userId);

    return res.status(httpStatus.OK).send(hotel);
  } catch (error) {
    next(error);
  }
}

export default {
  getAllHotels,
  getHotelById,
};
