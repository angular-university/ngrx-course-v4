


import {UiState, INITIAL_UI_STATE} from "../ui-state";
import {Action} from "@ngrx/store";
import {THREAD_SELECTED_ACTION} from "../actions";


export function uiState(state: UiState = INITIAL_UI_STATE, action: Action) : UiState {

    switch (action.type)  {

        case THREAD_SELECTED_ACTION:

            const newState = Object.assign({}, state);

            newState.currentThreadId = action.payload;

            return newState;


        default:
            return state;
    }

}