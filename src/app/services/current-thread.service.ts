import {Injectable} from '@angular/core';
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";
import {Observable, BehaviorSubject} from "rxjs";
import {ThreadsRestService} from "./threads-rest.service";





@Injectable()
export class CurrentThreadService {

    private threadSubject = new BehaviorSubject<ThreadDetailVM | null>(null);

    thread$: Observable<ThreadDetailVM | null> = this.threadSubject.asObservable();


    constructor(private threadRestService: ThreadsRestService) {

    }


    selectThread(threadId:number | null) {

        if (threadId) {
            const response = this.threadRestService.loadThreadDetail(threadId);

            this.threadRestService.loadThreadDetail(threadId)
                .subscribe(
                    thread => this.threadSubject.next(thread),
                    console.error
                );
        }
        else {
            this.threadSubject.next(null);
        }

    }


}
