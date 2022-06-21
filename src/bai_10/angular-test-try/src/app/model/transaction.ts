import {Customer} from "./customer";

export interface Transaction {
  id: number;
  transactionCode: string;
  customer?: Customer;
  transactionDate: string;
  serviceType: string;
  cost: number;
  area: number
}
