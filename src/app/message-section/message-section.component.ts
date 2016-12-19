import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {

      store.subscribe(
          state => console.log("message section received state",state)
      );

  }

  ngOnInit() {
  }

}
