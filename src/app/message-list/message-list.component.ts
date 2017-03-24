import {
    Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges,
    ChangeDetectionStrategy
} from '@angular/core';
import {MessageVM} from "../message-section/message.vm";
import * as _ from 'lodash';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnChanges {

    @Input()
    messages: MessageVM[] = [];

    @ViewChild('list')
    list: ElementRef;


    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes['messages']) {

            const previousMessages = changes['messages'].previousValue;

            const newMessages = changes['messages'].currentValue;

            if (previousMessages && newMessages.length > previousMessages.length) {
                setTimeout(() => {
                    this.scrollLastMessageIntoView();
                });
            }


        }

    }

    scrollLastMessageIntoView() {
        const items = this.list.nativeElement.querySelectorAll('li');
        const lastItem: any = _.last(items);
        if (lastItem) {
            lastItem.scrollIntoView();
        }
    }


    ngOnInit() {

    }


}
