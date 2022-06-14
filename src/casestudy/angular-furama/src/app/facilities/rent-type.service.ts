import {Injectable} from '@angular/core';
import {RentType} from '../model/RentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private rentTypes: RentType[] = [
    {
      id: 1,
      rentType: 'year',
    },
    {
      id: 2,
      rentType: 'month',
    },
    {
      id: 3,
      rentType: 'day',
    },
    {
      id: 4,
      rentType: 'hour',
    },
  ];

  constructor() {
  }

  public getAll() {
    return this.rentTypes;
  }
}
