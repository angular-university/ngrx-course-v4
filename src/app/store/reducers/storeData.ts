

import {StoreData, INITIAL_STORE_DATA} from "../store-data";
import {
    GET_USER_INFO_ACTION, LOAD_USER_THREADS_ACTION,
    WRITE_NEW_MESSAGE_ACTION, RECEIVE_NEW_MESSAGES_ACTION, SELECT_THREAD_ACTION, SelectThreadActionPayload,
    WriteNewMessageAction, ReceiveNewMessagesAction
} from "../actions";
import {Participant} from "../../../shared/model/participant";
import {AllUserData} from "../../../shared/model/all-user-data";
import {Message} from "../../../shared/model/message";



export function storeData(state = INITIAL_STORE_DATA, action): StoreData {


    switch(action.type) {

        case GET_USER_INFO_ACTION:
            const participant: Participant = action.payload;

            const clonedParticipants = Object.assign({}, state.participants);

            clonedParticipants[participant.id] = participant;

            return Object.assign({}, state,  {
                participants: clonedParticipants

            });


        case LOAD_USER_THREADS_ACTION:

            const {participants, threads, messages}: AllUserData = action.payload;

            const userData:StoreData = Object.assign({}, state,  {participants, threads, messages});

            return userData;

        case SELECT_THREAD_ACTION:

            const payload: SelectThreadActionPayload = action.payload;

            const newStoreData: StoreData = Object.assign({}, state);

            newStoreData.threads[payload.threadId].participants[payload.userId] = true;

            return newStoreData;


        case WRITE_NEW_MESSAGE_ACTION:

            return writeNewMessageAction(state, action);


        case RECEIVE_NEW_MESSAGES_ACTION:

            return receiveNewMessagesAction(state, action);

    }

    return state;


}


export function writeNewMessageAction(state: StoreData ,action: WriteNewMessageAction): StoreData {

    const newStoreData: StoreData = Object.assign({}, state);

    const newMessage = action.payload;

    newStoreData.messages[newMessage.id] = newMessage;
    newStoreData.threads[newMessage.threadId].messageIds.push(newMessage.id);

    return newStoreData;
}






export function receiveNewMessagesAction(state: StoreData ,action: ReceiveNewMessagesAction): StoreData {

    const newStoreData: StoreData = Object.assign({}, state);

    const newMessages: Message[] = action.payload;

    newMessages.forEach(
        message => {
            newStoreData.messages[message.id] = message;
            newStoreData.threads[message.threadId].messageIds.push(message.threadId);
    });

    return newStoreData;
}



