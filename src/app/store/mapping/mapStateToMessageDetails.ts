




import {ApplicationState, currentThread} from "../application-state";
import {ThreadDetailVM} from "../../../shared/view-model/thread-detail.vm";
import {buildParticipantNames} from "../../../shared/model/buildParticipantNames";



export function mapStateToMessageDetails(state: ApplicationState) : ThreadDetailVM {

    const thread = currentThread(state);

    const participantNames = thread ? buildParticipantNames(thread,state.participants) : '';


    return {
        id: state.currentThreadId,
        participantNames,
        messages: null
    }

}