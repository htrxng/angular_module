import { Injectable } from '@angular/core';
import {FacilityType} from '../model/FacilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private facilityTypes: FacilityType[] = [
    {
      id: 1,
      facilityType: 'Villa'
    },
    {
      id: 2,
      facilityType: 'House'
    },
    {
      id: 3,
      facilityType: 'Room'
    }
  ];
  constructor() { }
  public getAll() {
    return this.facilityTypes;  }
}
