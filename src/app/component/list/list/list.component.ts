import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';
import { selectAllTickets } from 'src/app/state/ticket.selector';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  tickets$: Observable<Ticket[]>;
  selectedTicket: Ticket | null = null;

  constructor(private store: Store<{ tickets: Ticket[] }>) {
    this.tickets$ = this.store.select(selectAllTickets);
  }

  showDialog(ticket: Ticket) {
    this.selectedTicket = { ...ticket };
  }

  getCountByStatus(status: string): Observable<number> {
    return this.tickets$
      .pipe(
        map(tickets => tickets.filter(ticket => ticket.status === status).length)
      );
  }
  
}
