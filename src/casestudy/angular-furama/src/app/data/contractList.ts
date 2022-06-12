import {Contract} from '../model/Contract';

export const contractList: Contract[] = [
  {
    id: 1,
    startDate: '01-06-2022',
    endDate: '07-06-2022',
    deposit: 200,
    total: 1500,
    customer: {
      id: 1,
      code: 'KH-0001',
      name: 'Huu Trung',
      birthday: '2002-18-08',
      idCard: '191923459',
      phone: '0345059222',
      email: 'huutrungg02@gmail.com',
      address: 'Hue',
      customerType: {
        id: 1,
        customerType: 'Platinum',
      },
      gender: 1
    },
    facility: {
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
    }
  },
  {
    id: 2,
    startDate: '01-06-2022',
    endDate: '07-06-2022',
    deposit: 200,
    total: 1500,
    customer: {
      id: 2,
      code: 'KH-0002',
      name: 'Grace',
      birthday: '1995-18-01',
      idCard: '123123123',
      phone: '051141411',
      email: 'grace.ray@gmail.com',
      address: 'London',
      customerType: {
        id: 2,
        customerType: 'Silver',
      },
      gender: 0,
    },
    facility: {
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
    }
  },
  {
    id: 3,
    startDate: '10-06-2022',
    endDate: '12-06-2022',
    deposit: 300,
    total: 2000,
    customer: {
      id: 3,
      code: 'KH-0003',
      name: 'Kate Hunington',
      birthday: '1992-12-08',
      idCard: '12314594111',
      phone: '068688554',
      email: 'kate.hunington@gmail.com',
      address: 'New York',
      customerType: {
        id: 3,
        customerType: 'Gold',
      },
      gender: 0,
    },
    facility: {
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
    }
  }
];
