import {Facility} from '../model/Facility';

export const facilityList: Facility[] = [
  {
    id: 1,
    name: 'Suite Room',
    image: '../../assets/images/room-1.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 120,
    area: 45,
    maximumPeople: 3,
    roomStandard: 'Suite Room',
  },
  {
    id: 2,
    name: 'Family Room',
    image: '../../assets/images/room-2.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 20,
    area: 45,
    maximumPeople: 3,
    roomStandard: 'Suite Room',
  },
  {
    id: 3,
    name: 'Deluxe Room',
    image: '../../assets/images/room-3.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 150,
    area: 45,
    maximumPeople: 5,
    roomStandard: 'Deluxe',
  },
  {
    id: 4,
    name: 'Classic Room',
    image: '../../assets/images/room-4.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 130,
    area: 45,
    maximumPeople: 5,
    roomStandard: 'Deluxe',
  },
  {
    id: 5,
    name: 'Superior Room',
    image: '../../assets/images/room-5.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 300,
    area: 45,
    maximumPeople: 6,
    roomStandard: 'Superior',
  },
  {
    id: 6,
    name: 'Luxury Room',
    image: '../../assets/images/room-6.jpg',
    rentType: {
      id: 1,
      rentType: 'day'
    },
    cost: 500,
    area: 45,
    maximumPeople: 5,
    roomStandard: 'Luxury',
  },
];
