import {CustomerType} from './CustomerType';

export interface Customer {
  id: number;
  name: string;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  status?: boolean;
  code: string;
  customerType: CustomerType;
  gender: number;
}
