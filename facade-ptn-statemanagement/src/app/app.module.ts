import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { TicketComponent } from './ticket/ticket.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    SearchTicketsComponent,
    TicketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
