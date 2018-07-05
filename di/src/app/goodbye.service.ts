import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodbyeService {
  constructor() {}

  getMessage() {
    console.log('Goodbye');
  }
}
