import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Ticket} from '../models';
import {TicketService} from '../services/ticket.service';
import {concatMap, filter, map, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  id: number;
  tickets$: Observable<Ticket>;
  private _route$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _ticketService: TicketService
  ) {
    this._route$ = this.route.params
      .pipe(
        tap(params => {
          this.id = +params['id']; // Change to number
        }),
        tap(() => {
          this.tickets$ = this._ticketService
            .getTickets()
            .pipe(
              take(1),
              concatMap(tickets => tickets),
              filter(ticket => ticket.ticket_id === this.id)
            );
        })
      )
      .subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._route$.unsubscribe();
  }
}
