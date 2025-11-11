// Import ItineraryPresenter
export const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
export const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Moscow', 'Nice'];
export const DESCRIPTION = [
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 'Cras aliquet varius magna, non porta ligula feugiat eget.',
 'Fusce tristique felis at fermentum pharetra.',
 'Aliquam id orci ut lectus varius viverra.',
 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];
export const FILTERS = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};
export const POINT_COUNT = 4;
export const MIN_PRICE = 1;
export const MAX_PRICE = 1000;
export const MIN_PHOTO_INDEX = 1;
export const MAX_PHOTO_INDEX = 5;
export const DATE_FORMAT = 'D MMMM';
export const TIME_FORMAT = 'HH:mm';

export const siteMainElement = document.querySelector('.page-main');
export const tripEventsElement = siteMainElement.querySelector('.page-body__container .trip-events');
export const tripEventsFilters = document.querySelector('.trip-controls__filters');
export const tripInfoElement = document.querySelector('.trip-main');
