import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../model/travel_tour_system/member';
import {TourType} from '../model/travel_tour_system/tour-type';
import {RangeType} from '../model/travel_tour_system/range-type';
import {Bus} from '../model/bus/bus';
import {Tour} from '../model/travel_tour_system/tour';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TravelTourService {

  constructor(private http: HttpClient) {
  }

  getMemberList(): Observable<Member[]> {
    return this.http.get<Member[]>(API_URL + '/members');
  }

  getTourTypeList(): Observable<TourType[]> {
    return this.http.get<TourType[]>(API_URL + '/tourTypes');
  }

  getRangeTypeList(): Observable<RangeType[]> {
    return this.http.get<RangeType[]>(API_URL + '/rangeTypes');
  }

  create(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(API_URL + '/tours', tour);
  }

  getTourList(): Observable<Tour[]> {
    return this.http.get<Tour[]>(API_URL + '/tours');
  }

  delete($event: number): Observable<void> {
    const id = $event;
    return this.http.delete<void>(`${API_URL}/delete/${id}`);
  }
}
