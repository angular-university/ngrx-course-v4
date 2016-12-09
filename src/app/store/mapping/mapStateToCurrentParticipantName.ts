import {ApplicationState} from "../application-state";





export function mapStateToCurrentParticipantName(state: ApplicationState): string {
    if (state.participants[state.userId]) {
        return state.participants[state.userId].name;
    }
    else {
        return "";
    }
}