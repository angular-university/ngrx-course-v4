




import {ApplicationState, currentThread, messagesForThread} from "../application-state";
import {ThreadDetailVM} from "../../../shared/view-model/thread-detail.vm";
import {buildParticipantNames} from "../../../shared/model/buildParticipantNames";
import {buildMessageVmFromMessage} from "../../../shared/model/buildMessageVmFromMessage";



export function mapStateToMessageDetails(state: ApplicationState) : ThreadDetailVM {

    const thread = currentThread(state);

    const participantNames = thread ? buildParticipantNames(thread,state.participants) : '';

    const messages = messagesForThread(state, state.currentThreadId);

    return {
        id: state.currentThreadId,
        participantNames,
        messages: messages.map(message => buildMessageVmFromMessage(message, state.participants))
    }

}