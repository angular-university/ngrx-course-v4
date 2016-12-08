import {
    Component, OnInit, Input, ViewChildren, AfterViewChecked, QueryList, ElementRef,
    OnChanges, ViewChild, Query, AfterViewInit
} from '@angular/core';
import {MessageVM} from "../../server/view-model/message.vm";
import * as _ from 'lodash';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges {

    @Input()
    messages: MessageVM[];

    @ViewChild('list')
    list: ElementRef;


    constructor() {

    }



    ngOnChanges() {

        setTimeout(() => {
            if (this.list) {
                const items =  this.list.nativeElement.querySelectorAll('li');
                const lastItem = _.last(items);
                console.log(lastItem);
            }
        });


    }





    ngOnInit() {

    }


}
