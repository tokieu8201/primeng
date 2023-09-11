import { Component, Input, OnChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { Ticket } from 'src/app/models/ticket.model';
import { updateTicketSuccess } from 'src/app/state/ticket.action';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnChanges{
  @Input() selectedTicket: Ticket | null = null;
  visible: boolean = true;

  listStatus = [
    { label: 'Off Location', value: 'off location' },
    { label: 'Standby', value: 'standby' },
    { label: 'Rigged In', value: 'rigged in' },
  ];
  
  constructor(private store: Store<{ tickets: Ticket[] }>) {
  }

  ngOnChanges() {
    this.visible = true;
  }

  updateTicket(){
    if (this.selectedTicket) {
      this.store.dispatch(updateTicketSuccess({ ticket: this.selectedTicket }));
      this.visible = false;            
    }
  }
}
