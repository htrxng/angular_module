import {Injectable} from '@angular/core';
import {RentType} from '../model/RentType';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private rentTypes: RentType[] = [];

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(API_URL + '/rentTypes');
  }
}
