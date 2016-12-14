import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {Participant} from "../../server/model/participant";
import {dbParticipants} from "../../server/db/db-data";


@Injectable()
export class ParticipantService {

    private subject = new BehaviorSubject<Participant>(null);

    user$: Observable<Participant> = this.subject.asObservable().filter(participant => !!participant);


    constructor() {

        // simplified implementation for demo purposes, normally the user is determined based on authentication

    }


    setUser(participantId: number) {
        document.cookie = 'PARTICIPANTID = ' + participantId;
        this.subject.next(dbParticipants[participantId]);
    }


}
