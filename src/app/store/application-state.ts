
import {Participant} from "../../shared/model/participant";
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";




export interface ApplicationState {

    userId: number;

    participants: {[key:number]:Participant};

    threads: {[key:number]: Thread};

    messages: {[key:number]: Message};

    currentThreadId: number;

}



export const INITIAL_APPLICATION_STATE: ApplicationState = {
    userId: null,
    participants: {},
    threads: {},
    messages: {},
    currentThreadId: null
};


export function currentThread(state: ApplicationState) :Thread {
    return state.threads && state.threads[state.currentThreadId] ? state.threads[state.currentThreadId] : null;
}
