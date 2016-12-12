

import {Action} from "@ngrx/store";
import {Participant} from "../../shared/model/participant";
import {Message} from "../../shared/model/message";
import {Thread} from "../../shared/model/thread";


export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';



export class GetUserInfoAction implements Action {

    readonly type = GET_USER_INFO_ACTION;

    constructor(public payload: Participant) {

    }

}




export class LoadUserThreadsAction implements Action {

    readonly type = LOAD_USER_THREADS_ACTION;

    constructor(public payload: [Thread[], Message[]]) {

    }

}