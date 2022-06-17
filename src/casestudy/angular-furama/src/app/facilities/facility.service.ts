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
  private facilityList: Facility[] = [];

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  create(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
    // console.log(facility);
    // facility.id = this.facilityList.length + 1;
    // this.facilityList.push(facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
    // for (let i = 0; i < this.facilityList.length; i++) {
    //   if (this.facilityList[i].id === id) {
    //     return this.facilityList[i];
    //   }
    // }
  }

  update(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${facility.id}`, facility);
    // for (let i = 0; i < this.facilityList.length; i++) {
    //   if (this.facilityList[i].id === facility.id) {
    //     this.facilityList[i] = facility;
    //   }
    // }
  }

    deleteFacility($event: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/facilities/${$event}`);
    // this.facilityList = this.facilityList.filter(facility => $event !== facility.id);
  }
}
