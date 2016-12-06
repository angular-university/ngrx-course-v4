import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ThreadSummaryVM} from "../../server/view-model/thread-summary.vm";

@Component({
    selector: 'thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

    @Input()
    threads: ThreadSummaryVM[];

    @Output()
    threadSelected = new EventEmitter<number>();


    constructor() {

    }


    ngOnInit() {

    }


    selectThread(threadId:number) {
        this.threadSelected.emit(threadId);
    }


}






