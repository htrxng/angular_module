import {ImportInvoiceMedicine} from './import-invoice-medicine';
import {Supplier} from './supplier';
import {Employee} from './employee';

export interface ImportInvoice {
  importInvoiceId: string;
  importSystemCode: number;
  paymentPrepayment: number;
  total: number;
  importInvoiceDate: string;
  supplier: Supplier;
  employee: Employee;
  importInvoiceMedicineList: ImportInvoiceMedicine[];
  flag: boolean;
}
