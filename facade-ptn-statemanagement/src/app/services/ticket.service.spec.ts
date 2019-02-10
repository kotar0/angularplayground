import {TestBed} from '@angular/core/testing';

import {filterTicket} from './ticket.service';
import {Observable, of} from 'rxjs';

describe('TicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const tickets = [
    {
      ticket_id: 1,
      user: 'Kotaro',
      message: 'Hello this is ticket',
      status: 0
    },
    {
      ticket_id: 2,
      user: 'John',
      message: 'Wash my Car',
      status: 0
    }
  ];

  it('Should do nothing because luck of argument user', () => {
    const src$ = filterTicket(of(tickets), 'Hello', undefined);
    expect(src$).toEqual(src$);
  });

  it('Should do nothing because luck of argument ticket', () => {
    const src$ = filterTicket(of(tickets), undefined, 'Kotaro');
    expect(src$).toEqual(src$);
  });

  it('Should return exact object searching by ticket message', () => {
    const src$ = filterTicket(of(tickets), 'Hello', '');
    src$.subscribe(item => {
      expect(item).toEqual([tickets[0]]);
    });
  });

  it('Should return exact object searching by username', () => {
    const src$ = filterTicket(of(tickets), '', 'John');
    src$.subscribe(item => {
      expect(item).toEqual([tickets[1]]);
    });
  });

  it('Should return exact object searching by ticket message and username', () => {
    const src$ = filterTicket(of(tickets), 'Hello', 'Kotaro');
    src$.subscribe(item => {
      expect(item).toEqual([tickets[0]]);
    });
  });

  it('Should NOT return any object(Should be empty array) searching by username and username', () => {
    const src$ = filterTicket(of(tickets), 'Hello', 'John');
    src$.subscribe(item => {
      expect(item).toEqual([]);
    });
  });
});
