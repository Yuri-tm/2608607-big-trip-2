import { getRandomInteger, getRandomArrayElement, getRandomBoolean, getRandomOffers } from '../utils';
import { TYPES, CITIES, DESCRIPTION, MIN_PHOTO_INDEX, MAX_PHOTO_INDEX, MIN_PRICE, MAX_PRICE } from '../const';
import { v4 as uuidv4 } from 'uuid';

const createDescription = () =>
  Array.from({length: getRandomInteger(1, 5)},
    () => getRandomArrayElement(DESCRIPTION)).join(' ');

export const mockDestination = [
  {
    id: uuidv4(),
    name: getRandomArrayElement(CITIES),
    description: createDescription(),
    pictures: Array.from({ length: getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX) }, () => ({
      src: `https://picsum.photos/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: getRandomArrayElement(DESCRIPTION),
    })),
  },
  {
    id: uuidv4(),
    name: getRandomArrayElement(CITIES),
    description: createDescription(),
    pictures: Array.from({ length: getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX) }, () => ({
      src: `https://picsum.photos/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: getRandomArrayElement(DESCRIPTION),
    })),
  },
  {
    id: uuidv4(),
    name: getRandomArrayElement(CITIES),
    description: createDescription(),
    pictures: Array.from({ length: getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX) }, () => ({
      src: `https://picsum.photos/248/152?random=${getRandomInteger(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX)}`,
      description: getRandomArrayElement(DESCRIPTION),
    })),
  }

];

export const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: uuidv4(),
        title: 'Upgrade to a business class',
        price: 35,
        isChosen: getRandomBoolean(),
      },
      {
        id: uuidv4(),
        title: 'Im in a hurry',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: uuidv4(),
        title: 'Choose music station',
        price: 5,
        isChosen: getRandomBoolean(),
      },
      {
        id: uuidv4(),
        title: 'Add an intermediate point',
        price: 10,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Add lunch',
        price: 10,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Comfort seats',
        price: 20,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'uuidv4()',
        title: 'A separate compartment',
        price: 30,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Lunch in the dining car',
        price: 15,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Hygiene supplies',
        price: 10,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Spacious cabin',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Access to the VIP area',
        price: 25,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Lunch at the restaurant',
        price: 30,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'uuidv4()',
        title: 'A multi-seat car',
        price: 30,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Rent A-Class car',
        price: 40,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Rent S-Class car',
        price: 60,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Switch to comfort class',
        price: 70,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Add meal',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Add luggage',
        price: 30,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Choose seats',
        price: 10,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Room for two',
        price: 30
      },
      {
        id: 'uuidv4()',
        title: 'Cleaning',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Breakfast in the room',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Access to the mini-bar',
        price: 50,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Guide services',
        price: 20,
        isChosen: getRandomBoolean(),
      },
      {
        id: 'uuidv4()',
        title: 'Ready-made routes',
        price: 50,
        isChosen: getRandomBoolean(),
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'uuidv4()',
        title: 'Vegan',
        price: 120
      },
      {
        id: 'uuidv4()',
        title: 'Gluten-free',
        price: 1200
      },
      {
        id: 'uuidv4()',
        title: 'soft drinks included',
        price: 20
      },
      {
        id: 'uuidv4()',
        title: 'smoking lounge',
        price: 5
      },
      {
        id: 'uuidv4()',
        title: 'all inclusive',
        price: 500
      },
    ]
  }
];

export function getRandomEvent() {
  const type = getRandomArrayElement(TYPES);
  const randomDestination = getRandomArrayElement(mockDestination);

  return {
    id: 'uuidv4()',
    basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
    dateFrom: new Date('2019-03-18T10:30:00'),
    dateTo: new Date('2019-03-18T11:00:00'),
    destination: randomDestination.id,
    isFavorite: getRandomBoolean(),
    offers: getRandomOffers(mockOffers.find((offer) => offer.type === type)),
    type: type,
  };
}
