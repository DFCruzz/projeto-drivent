import { Hotel } from '@prisma/client';
import { notFoundError } from '@/errors';
import hotelsRepository, { HotelWithRooms } from '@/repositories/hotels-repository';

async function getAllHotels() {
  const hotels: Hotel[] = await hotelsRepository.findAllHotels();
  if (!hotels) throw notFoundError();

  return hotels;
}

async function getHotelById(hotelId: number): Promise<HotelWithRooms> {
  const hotel = await hotelsRepository.findHotelById(hotelId);
  if (!hotel) throw notFoundError();

  return hotel;
}

export default {
  getAllHotels,
  getHotelById,
};
