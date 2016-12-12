import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhrHeaders";
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {Participant} from "../../shared/model/participant";


@Injectable()
export class ThreadsService {

    userId:number;


    constructor(private http:Http, private store: Store<ApplicationState>) {

        store.select(state => this.userId = state.userId).debug('new userId received ').subscribe();

    }


    loadUserThreads() : Observable<[Participant[], Thread[], Message[] ]> {
        return this.http.get('/api/threads', xhrHeaders(this.userId))
            .map(res => res.json().payload)
            .map(payload => {return <any>[payload.participants, payload.threads, payload.messages]});

    }


}
