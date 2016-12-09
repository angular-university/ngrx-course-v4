import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Participant} from "../../shared/model/participant";



@Injectable()
export class ParticipantsService {



  constructor(private http:Http) {

  }


  findParticipantById(participantId: number): Observable<Participant> {
        return this.http.get(`/api/participants/${participantId}`)
            .map(res => res.json().payload);
  }


}
