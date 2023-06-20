import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService
    ) {
      console.log(initService.config);
    }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'The Evil Hotel');
  }
}
