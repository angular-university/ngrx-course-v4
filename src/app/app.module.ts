import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {ThreadSectionComponent} from './thread-section/thread-section.component';
import {MessageSectionComponent} from './message-section/message-section.component';
import {ThreadListComponent} from './thread-list/thread-list.component';
import {MessageListComponent} from './message-list/message-list.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {StoreModule, combineReducers} from "@ngrx/store";
import {ParticipantsService} from "./services/participants.service";
import {ThreadsService} from "./services/threads.service";
import {uiState} from "./store/reducers/uiState";
import {storeData} from "./store/reducers/storeData";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


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
        StoreModule.provideStore(combineReducers({uiState, storeData})),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [ParticipantsService, ThreadsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
