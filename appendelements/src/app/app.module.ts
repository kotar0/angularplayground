import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';
import { MsgItemComponent } from './msg-item/msg-item.component';

import { MsgService } from './msg.service';
import { MsgHostDirective } from './msg-host.directive';



@NgModule({
  declarations: [
    AppComponent,
    MsgComponent,
    MsgItemComponent,
    MsgHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MsgService],
  bootstrap: [AppComponent],
  entryComponents:[MsgItemComponent]
})
export class AppModule { }
