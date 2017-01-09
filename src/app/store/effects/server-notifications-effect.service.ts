

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ThreadsService} from "../../services/threads.service";
import {Effect} from "@ngrx/effects";
import {NewMessagesReceivedAction} from "../actions";

@Injectable()
export class ServerNotificationsEffectService {


    constructor(private threadsService: ThreadsService) {

    }


    @Effect() newMessages$ = Observable.interval(3000)
        .switchMap(() => this.threadsService.loadNewMessagesForUser())
        .map(messages =>  new NewMessagesReceivedAction(messages))



}