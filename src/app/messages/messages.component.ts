import {Component, OnInit} from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {UiState} from "../store/ui-state";

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    message:string;

    constructor(private store: Store<ApplicationState>) {

    }

    ngOnInit() {

        this.store.select<UiState>("uiState").subscribe(
            (uiState:UiState) => this.message = uiState ? uiState.currentError : undefined
        );

    }

    close() {
        this.message = '';
    }

}
