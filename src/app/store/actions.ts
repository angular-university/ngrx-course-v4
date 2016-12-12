

import {Action} from "@ngrx/store";
import {Participant} from "../../shared/model/participant";
import {Message} from "../../shared/model/message";
import {Thread} from "../../shared/model/thread";
import {AllUserData} from "../../shared/model/all-user-data";


export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';
export const SELECT_THREAD_ACTION = 'SELECT_THREAD_ACTION';
export const MARK_THREAD_AS_READ_ACTION = 'MARK_THREAD_AS_READ_ACTION';
export const SEND_NEW_MESSAGE_ACTION = 'SEND_NEW_MESSAGE_ACTION';
export const RECEIVE_NEW_MESSAGES_ACTION = 'RECEIVE_NEW_MESSAGE_ACTION';



export class GetUserInfoAction implements Action {

    readonly type = GET_USER_INFO_ACTION;

    constructor(public payload: Participant) {

    }

}




export class LoadUserThreadsAction implements Action {

    readonly type = LOAD_USER_THREADS_ACTION;

    constructor(public payload: AllUserData) {

    }

}


export class SelectThreadAction implements Action {

    readonly type = SELECT_THREAD_ACTION;

    constructor(public payload: number) {}

}


export class MarkThreadAsReadAction implements Action {

    readonly  type = MARK_THREAD_AS_READ_ACTION;

    constructor(public payload: number) {

    }

}

export class SendNewMessageAction implements Action {

    readonly  type = SEND_NEW_MESSAGE_ACTION;

    constructor(public payload: Message) {

    }

}


export class ReceiveNewMessagesAction implements Action {

    readonly  type = RECEIVE_NEW_MESSAGES_ACTION;

    constructor(public payload: Message[]) {

    }

}














