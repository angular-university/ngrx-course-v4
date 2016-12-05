import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {Observable} from "rxjs";




@Injectable()
export class ThreadsService {


    constructor(private http: Http) {


    }


    loadAllThreadViewModels(): Observable<ThreadsVM> {
        return this.http.get('/api/threads-vm')
            .map(res => res.json())
            .map(json => json.payload);
    }


}
