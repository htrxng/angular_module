import {BusWareHouse} from './bus-ware-house';

export interface Bus {
  busId: number;
  licensePlates: number;
  departurePosition: string;
  destination: string;
  phone: string;
  departureTime: string;
  destinationTime: string;
  busType: string;
  busWareHouse: BusWareHouse;
}
