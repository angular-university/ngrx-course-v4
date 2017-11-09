


import {UiState, INITIAL_UI_STATE} from "../ui-state";
import {Action} from "@ngrx/store";
import {
    THREAD_SELECTED_ACTION, SELECT_USER_ACTION, SelectUserAction, ERROR_OCCURRED_ACTION,
    ErrorOccurredAction
} from "../actions";


export function uiState(state: UiState = INITIAL_UI_STATE, action: any) : UiState {

    switch (action.type)  {

        case THREAD_SELECTED_ACTION:

            const newState = Object.assign({}, state);

            newState.currentThreadId = action.payload.selectedThreadId;

            return newState;


        case SELECT_USER_ACTION:

            return handleSelectUserAction(state, <any>action);

        case ERROR_OCCURRED_ACTION:

            return handleErrorOccurredAction(state, <any>action);


        default:
            return state;

    }

}


function handleSelectUserAction(state: UiState, action: SelectUserAction) {

    const newUiState = Object.assign({}, state);

    newUiState.userId = action.payload;
    newUiState.currentThreadId = undefined;

    return newUiState;

}


function handleErrorOccurredAction(state: UiState, action: ErrorOccurredAction) {

    const newUiState = Object.assign({}, state);

    newUiState.currentError = action.payload;

    return newUiState;
}













