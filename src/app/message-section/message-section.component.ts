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


    currentThread$: Observable<ThreadDetailVM>;


    constructor(private currentThreadService: CurrentThreadService) {


    }


    ngOnInit() {

        this.currentThread$ = this.currentThreadService.thread$;

    }


}
