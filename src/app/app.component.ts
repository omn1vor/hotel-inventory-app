import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {}

  ngOnInit(): void {
    this.localStorage.setItem('name', 'The Evil Hotel');
  }
}
