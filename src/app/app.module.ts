import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list/list.component';
import { UpdateComponent } from './component/update/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';


import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

import { ticketReducer } from './state/ticket.reducer';
import { StoreModule } from '@ngrx/store';
import { TicketEffects } from './state/ticket.effect';
import { PrimeTableComponent } from './component/prime-table/prime-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    PrimeTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tickets: ticketReducer}),
    TableModule,
    CheckboxModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    ToastModule,
    PaginatorModule,
    HttpClientModule,
    EffectsModule.forRoot([TicketEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
