import {Injectable} from '@angular/core';
import {Facility} from '../model/Facility';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  create(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  update(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${facility.id}`, facility);
  }

    deleteFacility($event: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/facilities/${$event}`);
  }
}
