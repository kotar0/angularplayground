import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor() {}

  getMessage() {
    console.log('hello');
  }
}
