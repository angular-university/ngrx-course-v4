import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {Http} from "@angular/http";
import {ParticipantService} from "./participant.service";
import {xhrHeaders} from "./xhrHeaders";
import {MessageVM} from "../../shared/view-model/message.vm";

@Injectable()
export class MessageNotificationsService {


    private subject = new BehaviorSubject<MessageVM>(null);

    newMessagesForUser$: Observable<MessageVM> = this.subject.asObservable().filter(message => !!message);


    participantId: number;

    constructor(private http: Http, private participantService: ParticipantService) {

        participantService.user$.subscribe(
            participant => this.participantId = participant.id
        );

        setInterval( this.loadNewMessagesForUser.bind(this) , 2000);

    }

    loadNewMessagesForUser() {
        if (this.participantId) {
            this.http.post('/api/notifications/messages', null, xhrHeaders(this.participantId))
                .map(res => res.json().payload)
                .debug("new messages for user: ")
                .filter(message => message && message.length > 0)
                .subscribe(
                    (messages: MessageVM[]) => {
                        messages.forEach(newMessage => this.subject.next(newMessage));
                    }
                );
        }
    }



}
