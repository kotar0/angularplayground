import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {
  SearchCriteria,
  SearchResult,
  SearchState,
  Ticket,
  User
} from '../models';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  throttleTime
} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TicketService} from './ticket.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchFacadeService {
  private state = new SearchState();
  private dispatch = new BehaviorSubject<SearchState>(this.state);

  // 現在の検索結果の配信用
  get searchResults$(): Observable<Ticket[]> {
    return this.dispatch.asObservable().pipe(
      map(state => state.tickets),
      startWith([] as Ticket[])
    );
  }

  get searchCriteria$(): Observable<SearchCriteria> {
    return this.dispatch.asObservable().pipe(
      map(state => state.criteria)
      // 初期値はインスタンス化の時に担保
    );
  }

  constructor(
    private _ticketService: TicketService,
    private _userService: UserService
  ) {
  }

  updateCriteria(ticket: string, user: string) {
    const criteria = {...this.state.criteria, user, ticket};
    this.dispatch.next(
      (this.state = {
        ...this.state,
        criteria
      })
    );
  }

  searchTickets(
    searchBy$: Observable<string>,
    users$: Observable<string>,
    debounseMs = 400
  ) {
    const criteria = this.state.criteria;

    searchBy$ = searchBy$.pipe(
      debounceTime(debounseMs),
      distinctUntilChanged(),
      startWith(criteria.ticket)
    );
    users$ = users$.pipe(
      debounceTime(debounseMs),
      distinctUntilChanged(),
      startWith(criteria.user)
    );

    combineLatest(searchBy$, users$)
      .pipe(
        switchMap(([ticket, user]) => {
          this.updateCriteria(ticket, user);
          const hasCriteria = ticket.length || user.length;
          return !hasCriteria
            ? of([])
            : this._ticketService.getTickets(ticket, user);
        })
      )
      .subscribe(this._updateTickets.bind(this));

    return this.searchResults$;
  }

  private _updateTickets(tickets: Ticket[]) {
    this.dispatch.next(
      (this.state = {
        ...this.state,
        tickets
      })
    );
  }
}
