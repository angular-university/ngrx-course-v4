import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhrHeaders";
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {AllUserData} from "../../shared/model/all-user-data";
import {Message} from "../../shared/model/message";


@Injectable()
export class ThreadsService {

    userId:number;


    constructor(private http:Http, private store: Store<ApplicationState>) {

        store.select(state => this.userId = state.uiState.userId).debug('new userId received ').subscribe();

    }


    loadUserThreads() : Observable<AllUserData> {
        return this.http.get('/api/threads', xhrHeaders(this.userId))
            .map(res => res.json().payload);
    }


    markThreadAsRead(threadId:number): Observable<any> {
        return this.http.patch(`/api/threads/${threadId}`, JSON.stringify({read:true}), xhrHeaders(this.userId));
    }


    saveNewMessage(threadId: number, currentUserId: number, messageText: string): Observable<Message> {
        return this.http.post(`/api/threads/${threadId}`, JSON.stringify({read:true}), xhrHeaders(this.userId))
            .map(res => res.json().payload);
    }


}
