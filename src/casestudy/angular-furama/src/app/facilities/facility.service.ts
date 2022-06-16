import {Injectable} from '@angular/core';
import {Facility} from '../model/Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilityList: Facility[] = [
    {
      id: 1,
      code: 'DV-0001',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
    {
      id: 2,
      code: 'DV-0002',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
    {
      id: 3,
      code: 'DV-0003',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
    {
      id: 4,
      code: 'DV-0004',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
    {
      id: 5,
      code: 'DV-0005',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
    {
      id: 6,
      code: 'DV-0006',
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
      facilityType: {
        id: 3,
        facilityType: 'Room'
      }
    },
  ];

  constructor() {
  }

  getList() {
    return this.facilityList;
  }

  create(facility: Facility) {
    console.log(facility);
    facility.id = this.facilityList.length + 1;
    this.facilityList.push(facility);
  }

  findById(id: number) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        return this.facilityList[i];
      }
    }
  }

  update(facility: Facility) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === facility.id) {
        this.facilityList[i] = facility;
      }
    }
  }

  deleteFacility($event: number) {
    this.facilityList = this.facilityList.filter(facility => $event !== facility.id);
  }
}
