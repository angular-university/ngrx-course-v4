import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {UserThreadSummaryVM} from "../../shared/view-model/user-thread-summary.vm";

@Component({
    selector: 'thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

    @Input()
    threads: UserThreadSummaryVM[];

    @Input()
    currentSelectedThreadId: number;

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






