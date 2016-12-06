import {Injectable} from '@angular/core';
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";
import {Observable, BehaviorSubject} from "rxjs";
import {ThreadsRestService} from "./threads-rest.service";





@Injectable()
export class CurrentThreadService {

    private threadSubject = new BehaviorSubject<ThreadDetailVM | null>(null);

    thread$: Observable<ThreadDetailVM | null> = Observable.of(null);


    constructor(private threadRestService: ThreadsRestService) {

    }


    selectThread(threadId:number) {
        this.threadRestService.loadThreadDetail(threadId)
            .subscribe(
                thread => this.threadSubject.next(thread),
                console.error
            );
    }







}
