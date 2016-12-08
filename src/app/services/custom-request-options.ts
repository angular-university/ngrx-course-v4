

import {BaseRequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

    constructor() {
        super();
        this.headers.append('PARTICIPANTID', 'Hello-world');
    }

}