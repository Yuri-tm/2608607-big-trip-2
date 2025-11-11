import { CITIES } from '../const.js';
import { getRandomEvent, mockDestination, mockOffers } from '../mocked-data/mock-data.js';
import { humanizeEventDate } from '../utils.js';
import {POINT_COUNT} from '../const.js';


export default class EventsModel {
  #events = Array.from({ length: POINT_COUNT }, getRandomEvent);
  offers = mockOffers;
  destinations = mockDestination;

  get events() {
    return this.#events;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    if (!offersType || !itemsId) {
      return [];
    }
    return offersType.offers.filter((item) => itemsId.includes(item.id));
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationsById(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((item) => item.id === id) ?? null;
  }

  getTripTitle() {
    const events = this.#events;
    if (events.length === 0) {
      return 'Add an event into itinerary';
    }

    const destinationNames = events.map((point) => this.getDestinationsById(point.destination)?.name).filter(Boolean);
    const uniqueNames = [...new Set(destinationNames)];

    if (uniqueNames.length > 3) {
      return`${uniqueNames[0]} - ... - ${uniqueNames[uniqueNames.length - 1]}`;
    }
    return uniqueNames.join(' - ');
  }

  getTripDateRange() {
    const events = this.events;
    if (events.length === 0) {
      return '';
    }
    const sortedEvents = [...events].sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
    const dateStart = sortedEvents[0].dateFrom;
    const dateEnd = sortedEvents[sortedEvents.length - 1].dateTo;

    return `${humanizeEventDate(dateStart)} — ${humanizeEventDate(dateEnd)}`;
  }

  getTotalCost() {
    const events = this.events;

    return events.reduce((total, point) => {
      const eventCost = point.basePrice;
      const offersForEvent = this.getOffersById(point.type, point.offers);
      const offersCost = offersForEvent.reduce((sum, offer) => sum + offer.price, 0);

      return total + eventCost + offersCost;
    }, 0);
  }

  getAvailableFilters() {
    const events = this.#events;
    const currentDate = new Date();

    return [
      {
        type: 'everything',
        name: 'Everything',
        isChecked: true,
        isDisabled: events.length === 0
      },
      {
        type: 'future',
        name: 'Future',
        isChecked: false,
        isDisabled: !events.some((point) => new Date(point.dateFrom) > currentDate)
      },
      {
        type: 'present',
        name: 'Present',
        isChecked: false,
        isDisabled: !events.some((point) => new Date(point.dateFrom) <= currentDate && new Date(point.dateTo) < currentDate)
      };
      
    ]

  }
}
