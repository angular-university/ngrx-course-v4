

import {Action} from "@ngrx/store";
import {Participant} from "../../shared/model/participant";


export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION';




export class GetUserInfoAction implements Action {

    readonly type = GET_USER_INFO_ACTION;

    constructor(public payload: Participant) {

    }

}




