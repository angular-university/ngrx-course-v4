import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Participant} from "../../shared/model/participant";
import {ThreadsVM} from "../../shared/view-model/threads.vm";


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {


  constructor( ) {

  }

  ngOnInit() {



  }


    onThreadSelected(threadId:number) {

    }


}






