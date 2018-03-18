import { Component, OnInit } from '@angular/core';
import { MsgItem } from './msg-item';

import { MsgService } from './msg.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  msgs: MsgItem[];

  constructor(private _msgService: MsgService) {

  }

  ngOnInit() {
    this.msgs = this._msgService.getMsgs();
  }

}
