import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MsgHostDirective } from '../msg-host.directive';
import { MsgItem } from '../msg-item';
import { Msg } from '../Msg';




@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  @Input() msgs: MsgItem[];
  currentMsgIndex = -1;
  @ViewChild(MsgHostDirective) msgHost: MsgHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();

  }

  loadComponent() {
    this.currentMsgIndex = (this.currentMsgIndex + 1) % this.msgs.length;
    const currentMsgItem = this.msgs[this.currentMsgIndex];

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(currentMsgItem.component);
    const viewContainerRef = this.msgHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).msgs = currentMsgItem.msgs;

  }

}
