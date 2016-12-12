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
import {StoreModule, ActionReducer} from "@ngrx/store";
import {ApplicationState, INITIAL_APPLICATION_STATE} from "./store/application-state";
import {GET_USER_INFO_ACTION} from "./store/actions";
import {Participant} from "../shared/model/participant";
import {ParticipantsService} from "./services/participants.service";
import {ThreadsService} from "./services/threads.service";





const applicationStateReducer: ActionReducer<ApplicationState> = (state = INITIAL_APPLICATION_STATE, action) => {


    switch(action.type) {

        case GET_USER_INFO_ACTION:
            const participant: Participant = action.payload;

            const clonedParticipants = Object.assign({}, state.participants);

            clonedParticipants[participant.id] = participant;

            return Object.assign({}, state,  {

                userId: participant.id,
                participants: clonedParticipants

            });
    }

    return state;
};



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
     StoreModule.provideStore(applicationStateReducer)
  ],
  providers: [ParticipantsService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
