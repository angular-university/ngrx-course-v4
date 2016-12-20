

import {ApplicationState} from "../store/application-state";

export function mapStateToUserName(state: ApplicationState): string {
    return state.storeData.participants[state.uiState.userId].name;
}