import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {




  }

}
