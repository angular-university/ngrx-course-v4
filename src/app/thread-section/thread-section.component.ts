import {Component, OnInit} from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {LoadUserThreadsAction} from "../store/actions";
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {Thread} from "../../../shared/model/thread";

@Component({
    selector: 'thread-section',
    templateUrl: './thread-section.component.html',
    styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

    userName$: Observable<string>;
    unreadMessagesCounter$: Observable<number>;

    constructor(private threadsService: ThreadsService,
                private store: Store<ApplicationState>) {

        this.userName$ = store
            .skip(1)
            .map(this.mapStateToUserName);

        this.unreadMessagesCounter$ = store.skip(1)
            .map(this.mapStateToUnreadMessagesCounter);

    }

    mapStateToUserName(state: ApplicationState): string {
        return state.storeData.participants[state.uiState.userId].name;
    }


    mapStateToUnreadMessagesCounter(state: ApplicationState): number {

        const currentUserId = state.uiState.currentThreadId;

        return _.values<Thread>(state.storeData.threads)
            .reduce(
                (acc, thread) => acc + thread.participants[currentUserId]

                ,0);
    }

    ngOnInit() {

        this.threadsService.loadUserThreads()
            .subscribe(
                allUserData => this.store.dispatch(
                    new LoadUserThreadsAction(allUserData)
                )
            );

    }

}






