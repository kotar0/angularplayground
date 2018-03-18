import { Component, OnInit, Input } from '@angular/core';
import { Msg } from '../Msg';

@Component({
  selector: 'app-msg-item',
  templateUrl: './msg-item.component.html',
  styleUrls: ['./msg-item.component.css']
})
export class MsgItemComponent implements OnInit {
  @Input() msgs: Msg;

  constructor() { }

  ngOnInit() {
  }

}
