import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {CurrentThreadService} from "./services/current-thread.service";
import {ThreadsRestService} from "./services/threads-rest.service";
import {ParticipantService} from "./services/participant.service";
import { UserSelectionComponent } from './user-selection/user-selection.component';




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
    HttpModule
  ],
  providers: [ThreadsRestService, CurrentThreadService, ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
