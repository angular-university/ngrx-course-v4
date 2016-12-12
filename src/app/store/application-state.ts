
import {Participant} from "../../shared/model/participant";
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";
import * as _ from 'lodash';
import {UiState, INITIAL_UI_STATE} from "./ui-state";
import {StoreData, INITIAL_STORE_DATA} from "./store-data";



export interface ApplicationState {
    uiState: UiState
    storeData: StoreData
}


export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA
};


export function currentThread(state: ApplicationState) :Thread {
    return state.storeData.threads && state.storeData.threads[state.uiState.currentThreadId] ? state.storeData.threads[state.uiState.currentThreadId] : null;
}



export function messagesForThread(state:ApplicationState, threadId:number): Message[] {
    return _.filter(<any>_.values(state.storeData.messages), (message:Message) => message.threadId == threadId);
}


