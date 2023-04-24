import { Hotel, Room } from '@prisma/client';
import { prisma } from '@/config';

export type HotelWithRooms = Hotel & { Rooms: Room[] };

async function findAllHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

async function findHotelById(hotelId: number): Promise<HotelWithRooms> {
  return prisma.hotel.findUnique({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

export default {
  findAllHotels,
  findHotelById,
};
