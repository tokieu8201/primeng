import { createAction, props } from "@ngrx/store";
import { Ticket } from "../models/ticket.model";


export const updateTicketSuccess = createAction(
    '[Ticket] Update Ticket Success',
    props<{ ticket: Ticket }>()
);

