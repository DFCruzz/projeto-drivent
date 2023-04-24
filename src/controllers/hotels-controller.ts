import httpStatus from 'http-status';
import { NextFunction, Response } from 'express';
import hotelsService from '@/services/hotels-service';
import { AuthenticatedRequest } from '@/middlewares';

async function getAllHotels(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const hotels = await hotelsService.getAllHotels();

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    next(error);
  }
}

async function getHotelById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const hotelId = Number(req.params.hotelId);

  try {
    const hotel = await hotelsService.getHotelById(hotelId);

    return res.status(httpStatus.OK).send(hotel);
  } catch (error) {
    next(error);
  }
}

export default {
  getAllHotels,
  getHotelById,
};
