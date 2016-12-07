import { Component, OnInit } from '@angular/core';
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {ThreadsRestService} from "../services/threads-rest.service";
import {CurrentThreadService} from "../services/current-thread.service";
import {ParticipantService} from "../services/participant.service";
import {Participant} from "../../server/model/participant";



@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  threads: ThreadsVM;
  participant: Participant;


  constructor(
      private threadsService: ThreadsRestService,
      private currentThreadService: CurrentThreadService,
      private participantService: ParticipantService) {

  }

  ngOnInit() {

      const user$ = this.participantService.user$;

      user$.subscribe(
          participant => this.participant = participant
      );

      user$.mergeMap(user => this.threadsService.loadAllThreadViewModels())
          .subscribe(
              threads => {
                  this.threads = threads;
                  this.currentThreadService.selectThread(null);
              },
              console.error
          );

  }

    onThreadSelected(threadId:number) {
        this.currentThreadService.selectThread(threadId);
    }


}






