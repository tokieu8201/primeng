import { Component, Input, OnChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Ticket } from 'src/app/models/ticket.model';
import { updateTicketSuccess } from 'src/app/state/ticket.action';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [MessageService]
})
export class UpdateComponent implements OnChanges{
  @Input() selectedTicket: Ticket | null = null;
  visible: boolean = true;

  listStatus = [
    { label: 'Off Location', value: 'off location' },
    { label: 'Standby', value: 'standby' },
    { label: 'Rigged In', value: 'rigged in' },
  ];
  
  constructor(private store: Store<{ tickets: Ticket[] }>, private messageService: MessageService) {
  }

  ngOnChanges() {
    this.visible = true;
  }

  updateTicket(){
    if (this.selectedTicket) {
      this.store.dispatch(updateTicketSuccess({ ticket: this.selectedTicket }));
      this.visible = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated successfully'})            
    }
  }
}
