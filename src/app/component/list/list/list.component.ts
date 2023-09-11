import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Sticket } from 'src/app/models/sticket.model';
import { selectAllStickets } from 'src/app/state/sticket.selector';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  stickets$: Observable<Sticket[]>;
  selectedSticket: Sticket | null = null;

  constructor(private store: Store<{ stickets: Sticket[] }>) {
    this.stickets$ = this.store.select(selectAllStickets);
  }

  showDialog(sticket: Sticket) {
    this.selectedSticket = { ...sticket };
  }

  getCountByStatus(status: string): Observable<number> {
    return this.stickets$
      .pipe(
        map(stickets => stickets.filter(sticket => sticket.status === status).length)
      );
  }
  
}
