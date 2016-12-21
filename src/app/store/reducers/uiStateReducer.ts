


import {UiState, INITIAL_UI_STATE} from "../ui-state";
import {Action} from "@ngrx/store";

export function uiState(state: UiState = INITIAL_UI_STATE, action: Action) : UiState {

    switch (action.type)  {

        default:
            return state;
    }

}