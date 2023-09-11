import { createReducer, on } from "@ngrx/store";
import { STICKETS } from "../data/data";
import { Sticket } from "../models/sticket.model";
import { updateSticketSuccess } from "./sticket.action";

export interface SticketState{
    stickets: Sticket[],
}

export const initialState: SticketState = {
    stickets: [] = STICKETS,
}

export const sticketReducer = createReducer(
    initialState,
    on(updateSticketSuccess, (state, { sticket }) => ({
        ...state,
        stickets: state.stickets.map((s) => (s.id === sticket.id ? sticket : s))
    }))
);