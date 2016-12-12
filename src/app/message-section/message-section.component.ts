import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Participant} from "../../shared/model/participant";
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {ThreadDetailVM} from "../../shared/view-model/thread-detail.vm";
import {mapStateToMessageDetails} from "../store/mapping/mapStateToMessageDetails";

@Component({
    selector: 'message-section',
    templateUrl: './message-section.component.html',
    styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

    currentThreadVM: ThreadDetailVM;


    constructor(private store: Store<ApplicationState>) {

    }



    ngOnInit() {

        this.store
            .select(mapStateToMessageDetails)
            .filter(thread => !!thread.id)
            .debug("Thread Detail loaded")
            .subscribe(currentThreadVM => this.currentThreadVM = currentThreadVM);

    }



    onNewMessage(input:any) {


    }




}











