import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Participant} from "../../shared/model/participant";
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {ThreadDetailVM} from "../../shared/view-model/thread-detail.vm";
import {mapStateToMessageDetails} from "../store/mapping/mapStateToMessageDetails";
import {ThreadsService} from "../services/threads.service";
import {Message} from "../../shared/model/message";
import {UiState} from "../store/ui-state";
import {WriteNewMessageAction} from "../store/actions";

@Component({
    selector: 'message-section',
    templateUrl: './message-section.component.html',
    styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

    currentThreadVM: ThreadDetailVM;




    constructor(private store: Store<ApplicationState>, private threadsService: ThreadsService) {

    }



    ngOnInit() {

        this.store
            .select(mapStateToMessageDetails)
            .filter(thread => !!thread.id)
            .debug("Thread Detail loaded")
            .do(currentThreadVM => {
                this.currentThreadVM = currentThreadVM;
            })
            .subscribe();

    }


    onNewMessage(input:any) {

        this.threadsService.saveNewMessage(this.currentThreadVM.id,  input.value)
            .subscribe(
                message => this.store.dispatch(new WriteNewMessageAction(message)),
                console.error
            );

        input.value = '';

    }


}











