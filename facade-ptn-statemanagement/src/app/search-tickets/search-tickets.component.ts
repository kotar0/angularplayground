import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Ticket, User} from '../models';
import {combineLatest, Observable, of} from 'rxjs';
import {UserService} from '../services/user.service';
import {TicketService} from '../services/ticket.service';
import {FormControl} from '@angular/forms';
import {
  distinctUntilChanged,
  startWith,
  switchMap, take,
  throttleTime
} from 'rxjs/operators';
import {SearchFacadeService} from '../services/search-facade.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  assignedToUser = new FormControl();
  searchResult$: Observable<Ticket[]> = this._facede.searchTickets(
    this.searchTerm.valueChanges,
    this.assignedToUser.valueChanges
  );

  constructor(
    private _facede: SearchFacadeService,
    private _elRef: ElementRef
  ) {
  }

  ngOnInit() {
    this._facede.searchCriteria$.pipe(
      take(1)
    ).subscribe(
      criteria => {
        this.searchTerm.patchValue(criteria.ticket, {emitEvent: false});
        this.assignedToUser.patchValue(criteria.user, {emitEvent: false});
      }
    );
  }

  ngOnDestroy(): void {
  }
}
