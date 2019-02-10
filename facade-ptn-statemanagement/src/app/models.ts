export enum TicketState {
  ongoing,
  done
}

export interface Ticket {
  ticket_id: number;
  user: string;
  message: string;
  status: TicketState;
}

export interface User {
  user_id: number;
  user_name: string;
}

// 検索条件
export interface SearchCriteria {
  ticket: string;
  user: string;
}

// 検索結果
export interface SearchResult {
  id: number;
  message: string;
  status: string;
}

// 検索条件の状態
export class SearchState {
  users: User[];
  tickets: Ticket[];
  criteria: SearchCriteria = {
    ticket: '',
    user: ''
  };
}
