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
import {StoreModule, combineReducers, Action} from "@ngrx/store";
import {ApplicationState, INITIAL_APPLICATION_STATE} from "./store/application-state";
import {EffectsModule} from "@ngrx/effects";
import {LoadThreadsEffectService} from "./store/effects/load-threads-effect.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";
import {WriteNewMessageEffectService} from "./store/effects/write-new-message-effect.service";
import {ServerNotificationsEffectService} from "./store/effects/server-notifications-effect.service";


const reducers = {
    uiState,
    storeData
};

const combinedReducer = combineReducers(reducers);

export function storeReducer(state: ApplicationState, action: Action) {
    return combinedReducer(state, action);
}


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),
      EffectsModule.run(LoadThreadsEffectService),
      EffectsModule.run(WriteNewMessageEffectService),
      EffectsModule.run(ServerNotificationsEffectService),
      StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }








