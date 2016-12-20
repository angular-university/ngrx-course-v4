import {Component} from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MessageVM} from "./message.vm";
import {messageParticipantNamesSelector} from "./messageParticipantNamesSelector";
import {messagesSelector} from "./messagesSelector";

@Component({
    selector: 'message-section',
    templateUrl: './message-section.component.html',
    styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent {

    participantNames$: Observable<string>;
    messages$: Observable<MessageVM[]>;

    constructor(private store: Store<ApplicationState>) {

        this.participantNames$ = store.select(messageParticipantNamesSelector);

        this.messages$ = store.select(messagesSelector);

    }

}
