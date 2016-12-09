import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "../services/participant.service";

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {



  constructor(private participantService: ParticipantService) {



  }

  ngOnInit() {

  }


  onSelectUser(participantId) {

      this.participantService.setUser(participantId);

  }

}
