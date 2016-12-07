import { Component } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from "rxjs";



const debuggerOn = true;



Observable.prototype.debug = function (message: string) {
    return this.do(
        function (next) {
            if (debuggerOn) {
                console.log(message, next);
            }
        },
        function (err) {
            if (debuggerOn) {
                console.error('ERROR >>> ',message , err);
            }
        },
        function () {
            if (debuggerOn) {
                console.log('Completed.');
            }
        }
    );
};



declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>;
    }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
