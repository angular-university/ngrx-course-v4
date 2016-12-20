

import {ApplicationState} from "../store/application-state";

export function userNameSelector(state: ApplicationState): string {

    if (state.uiState.userId) {
        return "";
    }

    return state.storeData.participants[state.uiState.userId].name;
}