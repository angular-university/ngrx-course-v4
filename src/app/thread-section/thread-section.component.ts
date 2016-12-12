import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {mapStateToCurrentParticipantName} from "../store/mapping/mapStateToCurrentParticipantName";


@Component({
    selector: 'thread-section',
    templateUrl: './thread-section.component.html',
    styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {


    currentParticipantName: string;


    constructor(private store: Store<ApplicationState>) {

    }




    ngOnInit() {

        this.store.select(mapStateToCurrentParticipantName)
            .debug("Received new Participant Name")
            .subscribe(currentParticipantName => this.currentParticipantName = currentParticipantName);

    }




    onThreadSelected(threadId: number) {

    }


}






