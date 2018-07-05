import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hello = new HelloService();

  constructor(private _msgService: HelloService) {}

  ngOnInit() {
    this._msgService.getMessage();
    this.hello.getMessage();
  }
}
