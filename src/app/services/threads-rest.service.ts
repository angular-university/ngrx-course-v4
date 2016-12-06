import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {Observable} from "rxjs";
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";




@Injectable()
export class ThreadsRestService {



    constructor(private http: Http) {

    }


    loadAllThreadViewModels(): Observable<ThreadsVM> {
        return this.http.get('/api/threads-vm')
            .map(res => res.json())
            .map(json => json.payload);
    }


    loadThreadDetail(threadId: number) : Observable<ThreadDetailVM> {
        return this.http.get(`/api/threads-vm/${threadId}`)
            .map(res => res.json())
            .map(json => json.payload);
    }



}




