import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import {Observable} from "rxjs";


const debuggerOn = true;

Observable.prototype.debug = function(message:string) {
    return this.do(
        nextValue => {
            if (debuggerOn) {
                console.log(message, nextValue)
            }
        },
        error => {
            if (debuggerOn) {
                console.error(message, error)
            }
        },
        () => {
            if (debuggerOn) {
                console.error("Observable completed - ", message)
            }
        }
    );
};


declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>
    }
}




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);









