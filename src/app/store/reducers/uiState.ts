




import {INITIAL_UI_STATE, UiState} from "../ui-state";
import {GET_USER_INFO_ACTION, SELECT_THREAD_ACTION} from "../actions";
import {Participant} from "../../../shared/model/participant";




export function uiState(state = INITIAL_UI_STATE, action): UiState {

    switch(action.type) {

        case GET_USER_INFO_ACTION:

            const participant: Participant = action.payload;

            if (!participant) {
                return state;
            }

            return Object.assign({}, state,  {
                userId: participant.id
            });

        case SELECT_THREAD_ACTION:

            const currentThreadId = action.payload.threadId;

            return Object.assign({}, state,  {currentThreadId});
    }

    return state;


}