import { Component, Inject } from '@angular/core';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-inventory-app';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {}
}
