import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state = 'initial';
  stream$ = Observable.of(0);
  subject$ = new BehaviorSubject<any>(0);

  ngOnInit() {
    this.subject$.subscribe(this.stream$);
  }

  start() {
    this.stream$.subscribe(succ => {
      this.state = 'prossesing';
      Observable.timer(1000).subscribe(succ => {
        this.state = 'complete';
      });
    });
  }
}
