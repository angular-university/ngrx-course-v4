import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
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


    loadThreadDetail(threadId: number): Observable<ThreadDetailVM> {
        return this.http.get(`/api/threads-vm/${threadId}`)
            .map(res => res.json())
            .map(json => json.payload);
    }


    saveNewMessage(threadId: number, participantId: number, message: string): Observable<any> {
        return this.http.post('/api/threads-vm', JSON.stringify({threadId, participantId, message}), this.xhrHeaders());
    }


    markThreadAsReadByUser(threadId: number): Observable<any> {
        return this.http.patch(`/api/threads-vm/${threadId}`, JSON.stringify({read:true}), this.xhrHeaders());
    }


    xhrHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return {headers};
    }

}




