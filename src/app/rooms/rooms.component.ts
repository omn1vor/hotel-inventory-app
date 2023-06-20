import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, catchError, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  hotelName = 'Sea View Hotel';
  hideTitle = false;
  rooms: Room[] = [];
  selectedRoom!: Room;

  // Errors should be handled in service, this is just an example
  error$: Subject<string> = new Subject;

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  // Example of loading a lot of data 
  totalBytes = 0;

  stream = new Observable<string>(observer => {
    observer.next('stream data 1');
    observer.next('stream data 2');
    observer.next('stream data 3');
    observer.complete();
  })

  @ViewChild(HeaderComponent) 
  headerComponent!: HeaderComponent;
  
  constructor(private roomsService: RoomsService) {}

  toggleTitle(): void {
    this.hideTitle = !this.hideTitle;
  }

  ngOnInit(): void {    
    // Making this call twice to test caching 
    // this.roomsService.getRooms().subscribe(rooms => {
    //   this.rooms = rooms;
    // });
    // this.roomsService.getRooms().subscribe(rooms => {
    //   this.rooms = rooms;
    // });

    // And now make them use caching
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.rooms = rooms;
    // });
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.rooms = rooms;
    // });

    this.stream.subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('stream is complete')
    });

    this.stream.subscribe(data => console.log('received stream data: ' + data));

    // Example of loading a lot of data
    this.roomsService.getPhotos().subscribe(event => {
      switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Request success!');
            break;
          case HttpEventType.DownloadProgress:
            this.totalBytes += event.loaded;
            break;
          case HttpEventType.Response:
              console.log('Request complete!');
              break;
  
      }
    });

  }

  selectRoom(room: Room) {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: Room =
    {
      // number: 10,
      amenities: 'none',
      price: 11,
      rating: 3.3,
      availableFrom: new Date('2022-01-01'),
      availableTo: new Date("2023-12-31")
    };

    this.roomsService.addRoom(newRoom).subscribe(data => {
      this.rooms = [...this.rooms, data];
    })

  }

  editRoom() {
    const updatedRoom = {
      number: 3,
      amenities: 'WC, kettle',
      price: 17,
      rating: 3.4,
      availableFrom: new Date('2023-01-01'),
      availableTo: new Date('2023-12-31')
    }

    this.roomsService.editRoom(updatedRoom).subscribe(data => {
      this.rooms = [...this.rooms.map(room => {
        if (room.number === data.number) {
          return data;
        } else {
          return room;
        }
      })]
    })
  }

  deleteRoom() {
    if (!this.selectedRoom) {
      return;
    }

    this.roomsService.deleteRoom(this.selectedRoom).subscribe(data => {
      this.rooms = this.rooms.filter(r => r !== this.selectedRoom);
    });
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms view (title modified at AfterViewInit)";
  }

}
