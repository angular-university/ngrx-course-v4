import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhrHeaders";
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {AllUserData} from "../../shared/model/all-user-data";


@Injectable()
export class ThreadsService {

    userId:number;


    constructor(private http:Http, private store: Store<ApplicationState>) {

        store.select(state => this.userId = state.userId).debug('new userId received ').subscribe();

    }


    loadUserThreads() : Observable<AllUserData> {
        return this.http.get('/api/threads', xhrHeaders(this.userId))
            .map(res => res.json().payload);

    }


}
