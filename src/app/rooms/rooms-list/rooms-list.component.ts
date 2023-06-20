import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../room'

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
  @Input() 
  rooms: Room[] | null = [];

  @Output() 
  selectedRoom = new EventEmitter<Room>();

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }
}
