import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
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

    currentUserId: number;
    currentParticipantName: string;
    currentSelectedThreadId:number;
    threadsVM: ThreadsVM;


    constructor(private store: Store<ApplicationState>, private threadsService: ThreadsService) {

    }


    ngOnInit() {

        const state$ = this.store.skip(1);


        state$
            .filter( state => state.uiState.userId != this.currentUserId )
            .do(state => {
                if (state.uiState.userId) {
                    this.currentUserId = state.uiState.userId;
                    this.currentParticipantName = state.storeData.participants[this.currentUserId].name;
                }
            })
            .mergeMap( () =>  this.threadsService.loadUserThreads() )
            .subscribe(
                 payload => this.store.dispatch(new LoadUserThreadsAction(payload))
            );

        this.store
            .select(mapStateToThreadSummariesAndCounter)
            .subscribe(
                threadsVM => this.threadsVM = threadsVM
            );

    }



    onThreadSelected(threadId: number) {
        this.threadsService.markThreadAsRead(threadId)
            .subscribe(
                () => {
                    this.currentSelectedThreadId = threadId;
                    this.store.dispatch(new SelectThreadAction({threadId: threadId, userId:this.currentUserId}));
                },
                console.error
            );

    }


}






