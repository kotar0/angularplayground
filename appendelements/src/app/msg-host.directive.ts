import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMsgHost]'
})
export class MsgHostDirective {
  constructor( public viewContainerRef: ViewContainerRef ) { }
}
