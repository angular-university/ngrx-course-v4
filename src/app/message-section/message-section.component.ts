import { Component, OnInit } from '@angular/core';
import {CurrentThreadService} from "../services/current-thread.service";

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {





  constructor(private currentThreadService: CurrentThreadService) {


  }



  ngOnInit() {

  }



}
