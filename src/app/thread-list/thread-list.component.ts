import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ThreadSummaryVM} from "../thread-section/thread-summary.vm";

@Component({
    selector: 'thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

    @Input()
    threads: ThreadSummaryVM[];

    @Input()
    currentSelectedThreadId:number;


    @Output()
    threadSelected = new EventEmitter();


    constructor() {
    }

    ngOnInit() {

    }

    selectThread(threadId:number) {
        this.threadSelected.next(threadId);
    }

}
