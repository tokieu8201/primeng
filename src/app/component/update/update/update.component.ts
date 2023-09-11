import { Component, Input, OnChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { Sticket } from 'src/app/models/sticket.model';
import { updateSticketSuccess } from 'src/app/state/sticket.action';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnChanges{
  @Input() selectedSticket: Sticket | null = null;
  visible: boolean = true;

  listStatus = [
    { label: 'Off Location', value: 'off location' },
    { label: 'Standby', value: 'standby' },
    { label: 'Rigged In', value: 'rigged in' },
  ];
  
  constructor(private store: Store<{ stickets: Sticket[] }>) {
  }

  ngOnChanges() {
    this.visible = true;
  }

  updateSticket(){
    if (this.selectedSticket) {
      this.store.dispatch(updateSticketSuccess({ sticket: this.selectedSticket }));
      this.visible = false;            
    }
  }
}
