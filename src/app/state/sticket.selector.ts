import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SticketState } from "./sticket.reducer";

export const selectSticketState = createFeatureSelector<SticketState>('stickets');

export const selectAllStickets = createSelector(
    selectSticketState,
    (state) => state.stickets
);
