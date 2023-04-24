import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.company.companyName(),
      image: faker.image.dataUri(),
    },
  });
}

export async function createHotelRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.lorem.word(),
      capacity: faker.datatype.number({ min: 1, max: 10 }),
      hotelId: hotelId,
    },
  });
}
