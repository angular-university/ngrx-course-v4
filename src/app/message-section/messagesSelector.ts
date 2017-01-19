


import {ApplicationState} from "../store/application-state";
import {MessageVM} from "./message.vm";
import {Message} from "../../../shared/model/message";
import * as _ from 'lodash';
import {Participant} from "../../../shared/model/participant";
import { createSelector } from 'reselect'



export function messagesSelector(state:ApplicationState): MessageVM[] {

    const messages = getMessagesForCurrentThread(state);

    const participants = getParticipants(state);

    return messages.map( message => mapMessageToMessageVM(participants, message) );
}



function getMessagesForCurrentThread(state: ApplicationState): Message[] {

    const currentThread = state.storeData.threads[state.uiState.currentThreadId];

    return currentThread.messageIds.map(messageId => state.storeData.messages[messageId] );
}


function getParticipants(state: ApplicationState) {
    return state.storeData.participants;
}



function mapMessageToMessageVM(participants: {[key:number]:Participant}, message:Message): MessageVM {
    return {
        id: message.id,
        text:message.text,
        timestamp: message.timestamp,
        participantName: participants[message.participantId].name
    };
}







