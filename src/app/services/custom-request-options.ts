

import {BaseRequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {ParticipantService} from "./participant.service";


export class CustomRequestOptions extends BaseRequestOptions {


    constructor(participantService: ParticipantService) {
        super();

        participantService.user$
            .subscribe(
                participant => this.headers.set('PARTICIPANTID', participant.id.toString())
            );
    }



}