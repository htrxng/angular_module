import {Member} from './member';
import {Tour} from './tour';
import {Status} from './status';

export interface RegisterForm {
  registerFormId: number;
  quantityPeople: number;
  member: Member;
  tour: Tour;
  status: Status;
}
