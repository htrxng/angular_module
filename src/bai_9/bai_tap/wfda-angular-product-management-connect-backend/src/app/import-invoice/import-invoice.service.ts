import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Supplier} from '../model/pharmarcy/supplier';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicine} from '../model/pharmarcy/medicine';
import {FormGroup} from '@angular/forms';
import {Employee} from '../model/pharmarcy/employee';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ImportInvoiceService {
  private suppliers: Supplier[] = [
    {
      supplierId: 'DOMESCO',
      supplierName: 'Công ty Domesco',
      supplierAddress: 'Ba Đình, Hà Nội',
      supplierPhone: '090123456',
      supplierEmail: 'domescovn@gmail.com',
      note: 'domescodegym',
      flag: true
    },
    {
      supplierId: 'DHN',
      supplierName: 'DƯỢC HÀ NỘI',
      supplierAddress: 'Đống Đa, Hà Nội',
      supplierPhone: '090123456',
      supplierEmail: 'duochanoi@gmail.com',
      note: 'duochanoi',
      flag: true
    },
  ];

  constructor(private http: HttpClient) {
  }

  getSupplierList(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(API_URL + '/import-invoice/suppliers');
  }

  getMedicineList() {
    return this.http.get<Medicine[]>(API_URL + '/import-invoice/medicines');
  }

  save(createImportInvoiceForm: FormGroup): Observable<any> {
    console.log('form: ' + createImportInvoiceForm);
    return this.http.post<any>(`${API_URL}` + '/import-invoice/importInvoice', createImportInvoiceForm);
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/import-invoice/employees');
  }
}
