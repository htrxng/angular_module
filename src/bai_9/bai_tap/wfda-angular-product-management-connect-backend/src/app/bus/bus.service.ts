import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from '../model/bus/bus';
import {BusWareHouse} from '../model/bus/bus-ware-house';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Bus[]> {
    return this.http.get<Bus[]>(API_URL + '/buses');
  }

  delete($event: number): Observable<void> {
    const id = $event;
    return this.http.delete<void>(`${API_URL}/deleteBus/${id}`);
  }

  getBusWareHouseList(): Observable<BusWareHouse[]> {
    return this.http.get<BusWareHouse[]>(API_URL + '/busWareHouses');
  }

  findById(id: number): Observable<Bus> {
      return this.http.get<Bus>(`${API_URL}/findBus/${id}`);
  }

  update(bus: Bus): Observable<Bus> {
    const id = bus.busId;
    console.log(bus.busWareHouse.busWareHouseId);
    return this.http.put<Bus>(`${API_URL}/updateBus/${id}`, bus);
  }

  create(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(API_URL + '/buses', bus);
  }

  // getBusList(index: number): Observable<any> {
  //   console.log('getList');
  //   return this.http.get<Page>(API_URL + '/busPaging?index=' + index);
  // }
  searchVehicle(busWareHouseName: string, busWareHouseId: string): Observable<Bus[]> {
    return this.http.get<Bus[]>
    (`${API_URL}/searchingBus?busWareHouseName=${busWareHouseName}&busWareHouseId=${busWareHouseId}`);
  }
}
