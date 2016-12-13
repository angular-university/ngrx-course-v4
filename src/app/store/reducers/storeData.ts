

import {INITIAL_APPLICATION_STATE} from "../application-state";
import {StoreData, INITIAL_STORE_DATA} from "../store-data";
import {
    GET_USER_INFO_ACTION, LOAD_USER_THREADS_ACTION,
    WRITE_NEW_MESSAGE_ACTION, RECEIVE_NEW_MESSAGES_ACTION, SELECT_THREAD_ACTION, SelectThreadActionPayload
} from "../actions";
import {Participant} from "../../../shared/model/participant";
import {AllUserData} from "../../../shared/model/all-user-data";



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


        case RECEIVE_NEW_MESSAGES_ACTION:

    }

    return state;


}