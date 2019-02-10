import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchTicketsComponent} from './search-tickets/search-tickets.component';
import {TicketComponent} from './ticket/ticket.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchTicketsComponent
  },
  {
    path: 'ticket/:id',
    component: TicketComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
