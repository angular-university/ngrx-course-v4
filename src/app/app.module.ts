import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import {StoreModule, ActionReducer, combineReducers} from "@ngrx/store";
import {ApplicationState, INITIAL_APPLICATION_STATE} from "./store/application-state";
import {GET_USER_INFO_ACTION, LOAD_USER_THREADS_ACTION, SELECT_THREAD_ACTION} from "./store/actions";
import {Participant} from "../shared/model/participant";
import {ParticipantsService} from "./services/participants.service";
import {ThreadsService} from "./services/threads.service";
import {Thread} from "../shared/model/thread";
import {AllUserData} from "../shared/model/all-user-data";
import {uiState} from "./store/reducers/uiState";
import {storeData} from "./store/reducers/storeData";








@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     StoreModule.provideStore(combineReducers({uiState, storeData}))
  ],
  providers: [ParticipantsService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
