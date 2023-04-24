import { Hotel } from '@prisma/client';
import { notFoundError } from '@/errors';
import hotelsRepository from '@/repositories/hotels-repository';

async function getAllHotels(): Promise<Hotel[]> {
  const hotels: Hotel[] = await hotelsRepository.findAllHotels();
  if (!hotels) throw notFoundError();

  return hotels;
}

export default {
  getAllHotels,
};
