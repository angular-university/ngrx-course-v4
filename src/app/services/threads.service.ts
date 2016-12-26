import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AllUserData} from "../../../shared/to/all-user-data";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ThreadsService {

   constructor(private http: Http) { }


    loadUserThreads(userId:number): Observable<AllUserData> {

       const headers = new Headers();
       headers.append('USERID',userId.toString());

        return this.http.get('/api/threads', {headers})
            .map(res => res.json());
    }

}
