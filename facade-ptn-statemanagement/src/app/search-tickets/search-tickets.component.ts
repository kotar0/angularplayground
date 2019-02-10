import {Component, OnInit} from '@angular/core';
import {Ticket, User} from '../models';
import {combineLatest, Observable, of} from 'rxjs';
import {UserService} from '../services/user.service';
import {TicketService} from '../services/ticket.service';
import {FormControl} from '@angular/forms';
import {distinctUntilChanged, startWith, switchMap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResult$: Observable<Ticket[]>; // 型が違うかも
  // users$: Observable<string[]>;

  constructor(
    private _userService: UserService,
    private _ticketService: TicketService
  ) {
    const users$ = throttle(this.assignedToUser.valueChanges);
    const searchBy$ = throttle(this.searchTerm.valueChanges);

    this.searchResult$ = combineLatest(searchBy$, users$).pipe(
      switchMap(([ticket, user]) => {
        const hasCriteria = ticket.length || user.length;
        return !hasCriteria ? of([]) : this._ticketService.getTickets(ticket, user);
      })
    );

    // this.users$ = users$.pipe(
    //   switchMap((searchTerm) => {
    //
    //   })
    // )
  }

  ngOnInit() {
  }
}

const throttle = (source$: Observable<string>) => source$.pipe(
  throttleTime(350),
  distinctUntilChanged(),
  startWith('')
);

