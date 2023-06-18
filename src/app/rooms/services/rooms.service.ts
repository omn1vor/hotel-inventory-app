import { Inject, Injectable } from '@angular/core';
import { Room } from '../room';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    console.log(config.apiEndpoint);
  }

  getRooms(): Room[] {
    return [
      {
        number: 5,
        amenities: 'WC, AC, mini-bar',
        rating: 4.82,
        price: 40,
        availableFrom: new Date('2023-04-01'),
        availableTo: new Date('2023-12-31')
      },
      {
        number: 3,
        amenities: 'WC',
        rating: 3.4,
        price: 15,
        availableFrom: new Date('2023-01-01'),
        availableTo: new Date('2023-12-31')
      },
      {
        number: 1,
        amenities: 'WC, AC',
        rating: 4.722,
        price: 25,
        availableFrom: new Date('2023-02-01'),
        availableTo: new Date('2023-12-31')
      }
    ];
  }
}
