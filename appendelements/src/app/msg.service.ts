import { Injectable } from '@angular/core';
import { MsgItem } from './msg-item';
import { MsgItemComponent } from './msg-item/msg-item.component';



@Injectable()
export class MsgService {
  counter = 0;

  constructor() { }

  getMsgs() {
    return [
      new MsgItem( MsgItemComponent, { title: 'This is title 1',  body: 'This is body 1'} ),
      new MsgItem( MsgItemComponent, { title: 'This is title 2',  body: 'This is body 2'} ),
      new MsgItem( MsgItemComponent, { title: 'This is title 3',  body: 'This is body 3'} ),
    ]
  }

  makeMsg() {
    this.counter++;
    return new MsgItem( MsgItemComponent, { title: `Add Message ${this.counter}`, body: 'body'});
  }

}
