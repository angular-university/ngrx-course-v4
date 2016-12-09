import {
    Component, OnInit, Input, ViewChildren, AfterViewChecked, QueryList, ElementRef,
    OnChanges, ViewChild, Query, AfterViewInit
} from '@angular/core';
import * as _ from 'lodash';
import {MessageVM} from "../../shared/view-model/message.vm";

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewChecked {

    @Input()
    messages: MessageVM[];

    @ViewChild('list')
    list: ElementRef;

    messagesCount = 0;


    constructor() {

    }



    ngAfterViewChecked() {

        setTimeout(() => {
            if (this.list) {
                const items =  this.list.nativeElement.querySelectorAll('li');
                if (items && items.length !== this.messagesCount) {
                    const lastItem:any = _.last(items);
                    if (lastItem) {
                        lastItem.scrollIntoView();
                        this.messagesCount = items.length;
                    }
                }
            }
        });
    }


    ngOnInit() {

    }


}
