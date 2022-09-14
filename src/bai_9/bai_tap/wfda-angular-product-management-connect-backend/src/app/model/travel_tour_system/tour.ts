import {RangeType} from './range-type';
import {TourType} from './tour-type';
import {Member} from './member';

export interface Tour {
  tourId: number;
  tourName: string;
  address: string;
  startDate: string;
  endDate: string;
  endRegisterDate: string;
  maxPeople: number;
  schedule: string;
  targetPeople: string;
  cost: number;
  flag: boolean;
  rangeType: RangeType;
  tourType: TourType;
  member: Member;
}
