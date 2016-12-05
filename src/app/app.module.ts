import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MultiActorComponent } from './multi-actor/multi-actor.component';
import { FormUndoComponent } from './form-undo/form-undo.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "../router.config";

@NgModule({
  declarations: [
    AppComponent,
    MultiActorComponent,
    FormUndoComponent,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
