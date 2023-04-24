import { Hotel, Room } from '@prisma/client';
import { prisma } from '@/config';

async function findAllHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

export default {
  findAllHotels,
};
