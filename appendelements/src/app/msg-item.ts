import { Type } from '@angular/core';
import { Msg } from './Msg';


export class MsgItem {
  constructor(public component: Type<any>, public msgs: Msg) { }
}
