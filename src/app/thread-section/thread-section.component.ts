import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {LoadUserThreadsAction} from "../store/actions";



@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName:string;

  constructor(private threadsService: ThreadsService,
                private store: Store<ApplicationState>) {

      store
          .skip(1)
          .subscribe(
          state => {

              this.userName = state.storeData.participants[state.uiState.userId].name;

          }
      );

  }

  ngOnInit() {

        this.threadsService.loadUserThreads()
            .subscribe(
                allUserData => this.store.dispatch(
                    new LoadUserThreadsAction(allUserData)
                )
            );

  }

}






