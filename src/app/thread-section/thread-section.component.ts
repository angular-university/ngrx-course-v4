import {Component, OnInit} from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {UserThreadsLoadedAction, LoadUserThreadsAction, ThreadSelectedAction} from "../store/actions";
import {Observable} from "rxjs";
import {ThreadSummaryVM} from "./thread-summary.vm";
import {userNameSelector} from "./userNameSelector";
import {mapStateToUnreadMessagesCounter} from "./mapStateToUnreadMessagesCounter";
import {stateToThreadSummariesSelector} from "./stateToThreadSummariesSelector";
import {UiState} from "../store/ui-state";

import * as _ from 'lodash';

@Component({
    selector: 'thread-section',
    templateUrl: './thread-section.component.html',
    styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent {

    userName$: Observable<string>;
    unreadMessagesCounter$: Observable<number>;
    threadSummaries$: Observable<ThreadSummaryVM[]>;

    uiState: UiState;

    constructor(private store: Store<ApplicationState>) {

        this.userName$ = store.select(userNameSelector);

        this.unreadMessagesCounter$ = store.map(mapStateToUnreadMessagesCounter);

        this.threadSummaries$ = store.select(stateToThreadSummariesSelector);

        store.select(state => state.uiState).subscribe(uiState => this.uiState =  _.cloneDeep(uiState) );

    }

    onThreadSelected(selectedThreadId:number) {
        this.store.dispatch(
            new ThreadSelectedAction({selectedThreadId, currentUserId: this.uiState.userId}));
    }

}






