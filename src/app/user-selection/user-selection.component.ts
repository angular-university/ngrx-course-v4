import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {GetUserInfoAction} from "../store/actions";
import {ParticipantsService} from "../services/participants.service";



@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {


  constructor(private store:Store<ApplicationState>, private participantsService: ParticipantsService) {


  }



  ngOnInit() {



  }



  onSelectUser(participantId:string) {


    this.participantsService.findParticipantById(parseInt(participantId))
        .debug("Loading participant from backend")
        .subscribe(
            participant => {
                this.store.dispatch(new GetUserInfoAction(participant));
            },
            console.error
        );

  }

}
