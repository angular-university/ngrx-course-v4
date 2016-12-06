import {Component, OnInit} from '@angular/core';
import {CurrentThreadService} from "../services/current-thread.service";
import {Observable} from "rxjs";
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";
import {ThreadsRestService} from "../services/threads-rest.service";

@Component({
    selector: 'message-section',
    templateUrl: './message-section.component.html',
    styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

    participantId = 1; // to simplify the example,  we are always logged in with Alice

    currentThread: ThreadDetailVM | null = null;


    constructor(private currentThreadService: CurrentThreadService, private threadsRestService: ThreadsRestService) {

    }


    ngOnInit() {

        this.currentThreadService.thread$.subscribe(
            thread => this.currentThread = thread,
            console.error
        );

    }


    onNewMessage(message:string) {

        console.log("New message: ", message);

        if (this.currentThread) {
            this.threadsRestService.saveNewMessage(this.currentThread.id, this.participantId, message)
                .subscribe(
                    () => console.log('new message saved ...'),
                    console.error
                );
        }


    }


}











