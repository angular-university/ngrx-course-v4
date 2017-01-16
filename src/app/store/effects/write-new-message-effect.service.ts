

import {Injectable} from "@angular/core";
import {ThreadsService} from "../../services/threads.service";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {SEND_NEW_MESSAGE_ACTION, ErrorOccurredAction} from "../actions";


@Injectable()
export class WriteNewMessageEffectService {

    constructor(private actions$: Actions, private threadsService: ThreadsService) {

    }

    @Effect() newMessages$ : Observable<any> = this.actions$
        .ofType(SEND_NEW_MESSAGE_ACTION)
        .debug("sending new message to the server")
        .switchMap(action => this.threadsService.saveNewMessage(action.payload))
        .catch(() => Observable.of(new ErrorOccurredAction("Error Ocurred while saving message")) );

}



