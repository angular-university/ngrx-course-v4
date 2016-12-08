import {Injectable} from '@angular/core';
import {MessageVM} from "../../server/view-model/message.vm";
import {Observable, BehaviorSubject} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class MessageNotificationsService {


    private subject = new BehaviorSubject<MessageVM>(null);

    newMessagesForUser$: Observable<MessageVM> = this.subject.asObservable().filter(message => !!message);


    constructor(private http: Http) {

        setInterval( this.loadNewMessagesForUser.bind(this) , 5000);

    }


    loadNewMessagesForUser() {
        this.http.post('/api/notifications/messages', null)
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
