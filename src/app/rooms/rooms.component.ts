import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  @ViewChild(HeaderComponent) 
  headerComponent!: HeaderComponent;
  
  constructor(private roomsService: RoomsService) {}

  toggleTitle(): void {
    this.hideTitle = !this.hideTitle;
  }

  ngOnInit(): void {    
    this.rooms = this.roomsService.getRooms();
  }

  selectRoom(room: Room) {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: Room =
    {
      number: 10,
      amenities: 'none',
      price: 11,
      rating: 3.3,
      availableFrom: new Date('2022-01-01'),
      availableTo: new Date("2023-12-31")
    };

    this.rooms = [...this.rooms, newRoom];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms view (title modified at AfterViewInit)";
  }

}
