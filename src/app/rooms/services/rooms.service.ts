import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Room } from '../room';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(config.apiEndpoint);
  }


  // Moved to request interceptor
  // headers = new HttpHeaders({
  //   'token': 1234567890
  // });
  // getRooms$ = this.http.get<Room[]>('/api/rooms', {
  //   headers: this.headers
  // }).pipe(
  //   shareReplay(1)
  // );  

  getRooms$ = this.http.get<Room[]>('/api/rooms').pipe(
    shareReplay(1)
  );



  getRooms() {

    return this.http.get<Room[]>('/api/rooms');
  }

  addRoom(room: Room) {
    return this.http.post<Room>('/api/rooms', room);
  }

  editRoom(room: Room) {
    return this.http.put<Room>(`/api/rooms/${room.number}`, room);
  }

  deleteRoom(room: Room) {
    return this.http.delete(`/api/rooms/${room.number}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    });
    return this.http.request(request);
  }
}
