import { createAction, props } from "@ngrx/store";
import { Sticket } from "../models/sticket.model";


export const updateSticketSuccess = createAction(
    '[Sticket] Update Sticket Success',
    props<{ sticket: Sticket }>()
);

