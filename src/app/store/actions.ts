



import {Action} from "@ngrx/store";
import {AllUserData} from "../../../shared/to/all-user-data";


export const USER_THREADS_LOADED_ACTION = 'USER_THREADS_LOADED_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';
export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION';


export class LoadUserThreadsAction implements  Action {

    readonly type = LOAD_USER_THREADS_ACTION;

}


export class UserThreadsLoadedAction implements Action {

    readonly type = USER_THREADS_LOADED_ACTION;

    constructor(public payload?:AllUserData) {

    }

}

export class  ThreadSelectedAction implements Action {

    readonly type = THREAD_SELECTED_ACTION;

    constructor(public payload: number) {

    }

}