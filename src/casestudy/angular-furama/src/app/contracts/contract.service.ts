import {Injectable} from '@angular/core';
import {Contract} from '../model/Contract';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private contractList: Contract[] = [];

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
    // return this.contractList;
  }

  create(contract: Contract): Observable<void> {
    return this.http.post<void>(API_URL + '/contracts', contract);
    // contract.id = this.contractList.length + 1;
    // this.contractList.push(contract);
  }
}
