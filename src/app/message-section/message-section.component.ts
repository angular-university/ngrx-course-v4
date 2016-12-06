import {Component, OnInit} from '@angular/core';
import {CurrentThreadService} from "../services/current-thread.service";
import {Observable} from "rxjs";
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";

@Component({
    selector: 'message-section',
    templateUrl: './message-section.component.html',
    styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {


    currentThread: ThreadDetailVM | null = null;


    constructor(private currentThreadService: CurrentThreadService) {


    }


    ngOnInit() {

        this.currentThreadService.thread$.subscribe(
            thread => this.currentThread = thread,
            console.error
        );

    }


}
