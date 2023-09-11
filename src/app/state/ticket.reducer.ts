import { createReducer, on } from "@ngrx/store";
import { Ticket } from "../models/ticket.model";
import { TICKETS } from "../data/data";
import { updateTicketSuccess } from "./ticket.action";

export interface TicketState{
    tickets: Ticket[],
}

export const initialState: TicketState = {
    tickets: [] = TICKETS,
}

export const ticketReducer = createReducer(
    initialState,
    on(updateTicketSuccess, (state, { ticket }) => ({
        ...state,
        tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t))
    }))
);