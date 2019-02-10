import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Ticket, User} from '../models';
import {HttpClient} from '@angular/common/http';
import {concatMap, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private _http: HttpClient) {
  }

  getTickets(ticket?: string, user?: string): Observable<Ticket[]> {
    const request$ = this._http.get<Ticket[]>('/assets/json/ticket-data.json');
    return filterTicket(request$, ticket, user);
  }
}

export function filterTicket(source$: Observable<Ticket[]>, ticket?: string, user?: string) {
  if (ticket === undefined || user === undefined) {
    return source$;
  }
  return source$.pipe(
    map(tickets => {
      return tickets.filter(ticketItem => {
        if (ticket === '' && user !== '') {
          return ticketItem.user.includes(user);
        }
        if (ticket !== '' && user === '') {
          return ticketItem.message.includes(ticket);
        }
        if (ticket !== '' && user !== '') {
          return ticketItem.user.includes(user) && ticketItem.message.includes(ticket);
        }
      });
    })
  );
}
