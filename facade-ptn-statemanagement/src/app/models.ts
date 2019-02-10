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
