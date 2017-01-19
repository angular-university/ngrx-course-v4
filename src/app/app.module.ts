import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {ThreadsService} from "./services/threads.service";
import {StoreModule, combineReducers} from "@ngrx/store";
import {INITIAL_APPLICATION_STATE} from "./store/application-state";
import {EffectsModule} from "@ngrx/effects";
import {LoadThreadsEffectService} from "./store/effects/load-threads-effect.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";
import {WriteNewMessageEffectService} from "./store/effects/write-new-message-effect.service";
import {ServerNotificationsEffectService} from "./store/effects/server-notifications-effect.service";
import {MarkMessagesAsReadEffectService} from "./store/effects/mark-messages-as-read-effect.service";
import { MessagesComponent } from './messages/messages.component';
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {routerReducer, RouterStoreModule} from "@ngrx/router-store";
import { ChatMessageComponent } from './chat-message/chat-message.component';




@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    MessagesComponent,
    HomeComponent,
    AboutComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot(routes, { useHash: true }),
      StoreModule.provideStore(compose(storeFreeze, combineReducers)({uiState,storeData, router: routerReducer}), INITIAL_APPLICATION_STATE),
      RouterStoreModule.connectRouter(),
      EffectsModule.run(LoadThreadsEffectService),
      EffectsModule.run(WriteNewMessageEffectService),
      EffectsModule.run(ServerNotificationsEffectService),
      EffectsModule.run(MarkMessagesAsReadEffectService),
      StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }








