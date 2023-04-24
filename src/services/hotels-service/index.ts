import { Hotel } from '@prisma/client';
import { notFoundError, paymentRequiredError } from '@/errors';
import hotelsRepository, { HotelWithRooms } from '@/repositories/hotels-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';

async function getAllHotels(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();

  if (ticket.status !== 'PAID' || ticket.TicketType.isRemote === true || ticket.TicketType.includesHotel === false)
    throw paymentRequiredError();

  const hotels: Hotel[] = await hotelsRepository.findAllHotels();
  if (!hotels.length) throw notFoundError();

  return hotels;
}

async function getHotelById(hotelId: number, userId: number): Promise<HotelWithRooms> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();

  if (ticket.status !== 'PAID' || ticket.TicketType.isRemote === true || ticket.TicketType.includesHotel === false)
    throw paymentRequiredError();

  const hotel = await hotelsRepository.findHotelById(hotelId);
  if (!hotel) throw notFoundError();

  return hotel;
}

export default {
  getAllHotels,
  getHotelById,
};
