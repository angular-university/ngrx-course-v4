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
import {StoreModule} from "@ngrx/store";




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
     StoreModule.provideStore({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
