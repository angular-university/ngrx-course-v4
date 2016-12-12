




import {ApplicationState, currentThread, messagesForThread} from "../application-state";
import {ThreadDetailVM} from "../../../shared/view-model/thread-detail.vm";
import {buildParticipantNames} from "../../../shared/model/buildParticipantNames";
import {buildMessageVmFromMessage} from "../../../shared/model/buildMessageVmFromMessage";



export function mapStateToMessageDetails(state: ApplicationState) : ThreadDetailVM {

    const thread = currentThread(state);

    const participantNames = thread ? buildParticipantNames(thread,state.storeData.participants) : '';

    const messages = messagesForThread(state, state.uiState.currentThreadId);

    return {
        id: state.uiState.currentThreadId,
        participantNames,
        messages: messages.map(message => buildMessageVmFromMessage(message, state.storeData.participants))
    }

}