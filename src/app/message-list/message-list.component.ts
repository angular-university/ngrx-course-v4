import {Component, OnInit, Input} from '@angular/core';
import {MessageVM} from "../../server/view-model/message.vm";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  messages: MessageVM[];


  constructor() {


  }


  ngOnInit() {

  }


}
