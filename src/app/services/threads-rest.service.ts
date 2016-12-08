import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {Observable} from "rxjs";
import {ThreadDetailVM} from "../../server/view-model/thread-detail.vm";
import {ParticipantService} from "./participant.service";
import {xhrHeaders} from "./xhrHeaders";


@Injectable()
export class ThreadsRestService {

    participantId: number;

    constructor(private http: Http,  participantService: ParticipantService) {

        participantService.user$.subscribe(participant => this.participantId = participant.id)

    }

    loadAllThreadViewModels(): Observable<ThreadsVM> {
        return this.http.get('/api/threads-vm', xhrHeaders(this.participantId))
            .map(res => res.json())
            .map(json => json.payload);
    }

    loadThreadDetail(threadId: number): Observable<ThreadDetailVM> {
        return this.http.get(`/api/threads-vm/${threadId}`, xhrHeaders(this.participantId))
            .map(res => res.json())
            .map(json => json.payload);
    }

    saveNewMessage(threadId: number, message: string): Observable<any> {
        return this.http.post('/api/threads-vm', JSON.stringify({threadId, message}), xhrHeaders(this.participantId));
    }

    markThreadAsReadByUser(threadId: number): Observable<any> {
        return this.http.patch(`/api/threads-vm/${threadId}`, JSON.stringify({read:true}), xhrHeaders(this.participantId));
    }

}




