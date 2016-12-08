import { Component, OnInit } from '@angular/core';
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {ThreadsRestService} from "../services/threads-rest.service";
import {CurrentThreadService} from "../services/current-thread.service";
import {ParticipantService} from "../services/participant.service";
import {Participant} from "../../server/model/participant";
import * as _ from 'lodash';
import {MessageNotificationsService} from "../services/message-notifications.service";


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  threads: ThreadsVM;
  participant: Participant;
  currentSelectedThreadId: number;


  constructor(
      private threadsService: ThreadsRestService,
      private currentThreadService: CurrentThreadService,
      private participantService: ParticipantService,
      private messageNotificationService: MessageNotificationsService ) {

  }

  ngOnInit() {

      const user$ = this.participantService.user$;

      user$.subscribe(
          participant => this.participant = participant
      );

      user$.mergeMap(user => this.threadsService.loadAllThreadViewModels())
          .debug('Loaded All Threads From Server: ')
          .subscribe(
              threads => {
                  this.threads = threads;
                  this.currentThreadService.selectThread(null);
              },
              console.error
          );

      this.messageNotificationService.newMessagesForUser$
          .subscribe(
              newMessage => {
                  console.log("processing new message for user ", newMessage);

                  if (newMessage.threadId !== this.currentSelectedThreadId) {
                      const  threadWithNewMessage = _.find(this.threads.threadSummaries, thread => thread.id === newMessage.threadId);
                      threadWithNewMessage.read = false;
                      this.threads.unreadThreadsCounter++;
                  }
              },
              console.error
          );

  }


    onThreadSelected(threadId:number) {
        if (this.threads.unreadThreadsCounter > 0) {
            const threadSummary = _.find(this.threads.threadSummaries, thread => thread.id === threadId);
            threadSummary.read = true;
            this.threads.unreadThreadsCounter--;
        }
        this.currentSelectedThreadId = threadId;
        this.currentThreadService.selectThread(threadId);
    }


}






