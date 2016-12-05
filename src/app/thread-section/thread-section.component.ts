import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {ThreadsVM} from "../../server/view-model/threads.vm";



@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {


  threads: ThreadsVM;


  constructor(private threadsService: ThreadsService) {


  }

  ngOnInit() {

      this.threadsService.loadAllThreadViewModels().subscribe(
          threads => this.threads = threads,
          console.error
      );

  }

}
