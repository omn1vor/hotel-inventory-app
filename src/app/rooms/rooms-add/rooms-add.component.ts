import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  room: Room = {
    amenities: '',
    price: 0,
    rating: 0,
    availableFrom: new Date(),
    availableTo: new Date
  }

  succcessMessage: string = '';

  constructor(private roomsService: RoomsService) {}

  addRoom(roomsForm: NgForm) {
    this.roomsService
      .addRoom(this.room)
      .subscribe(data => {
        this.succcessMessage = `Room ${data.number} added successfully`;
        roomsForm.reset();
    });
  }
}
