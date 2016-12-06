import { Component, OnInit } from '@angular/core';
import {ThreadsVM} from "../../server/view-model/threads.vm";
import {ThreadsRestService} from "../services/threads-rest.service";
import {CurrentThreadService} from "../services/current-thread.service";



@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  threads: ThreadsVM;


  constructor(private threadsService: ThreadsRestService, private currentThreadService: CurrentThreadService) {

  }

  ngOnInit() {

      this.threadsService.loadAllThreadViewModels()
          .subscribe(
              threads => this.threads = threads,
              console.error
          );
  }

    onThreadSelected(threadId:number) {
        this.currentThreadService.selectThread(threadId);
    }


}






