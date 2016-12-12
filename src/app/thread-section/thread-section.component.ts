import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {mapStateToCurrentParticipantName} from "../store/mapping/mapStateToCurrentParticipantName";
import {ThreadsService} from "../services/threads.service";
import {LoadUserThreadsAction, SelectThreadAction} from "../store/actions";
import {ThreadsVM} from "../../shared/view-model/threads.vm";
import {mapStateToThreadSummariesAndCounter} from "../store/mapping/mapStateToThreadSummariesAndCounter";


@Component({
    selector: 'thread-section',
    templateUrl: './thread-section.component.html',
    styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

    currentParticipantName: string;
    threadsVM: ThreadsVM;


    constructor(private store: Store<ApplicationState>, private threadsService: ThreadsService) {

    }


    ngOnInit() {

        const name$ = this.store.select(mapStateToCurrentParticipantName)
            .filter(name => !!name)
            .debug("Received new Participant Name");

        name$.subscribe(currentParticipantName => this.currentParticipantName = currentParticipantName);

        name$.mergeMap(() =>  this.threadsService.loadUserThreads() )
            .subscribe(
                 payload => this.store.dispatch(new LoadUserThreadsAction(payload))
            );

        this.store.select(mapStateToThreadSummariesAndCounter)
            .subscribe(
                threadsVM => this.threadsVM = threadsVM
            );

    }


    onThreadSelected(threadId: number) {

        this.store.dispatch(new SelectThreadAction(threadId));

    }


}






