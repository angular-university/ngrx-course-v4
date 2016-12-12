import {ApplicationState} from "../application-state";





export function mapStateToCurrentParticipantName(state: ApplicationState): string {
    if (state.storeData.participants[state.uiState.userId]) {
        return state.storeData.participants[state.uiState.userId].name;
    }
    else {
        return "";
    }
}