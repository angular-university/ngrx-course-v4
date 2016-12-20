


import {ApplicationState} from "../store/application-state";
import {MessageVM} from "./message.vm";


export function messagesSelector(state:ApplicationState): MessageVM[] {

    const currentThreadId = state.uiState.currentThreadId;

    if (!currentThreadId) {
        return [];
    }


    //TODO
    return [];
}