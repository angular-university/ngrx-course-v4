

import {UserThreadSummaryVM} from "../view-model/user-thread-summary.vm";
import {Message} from "../model/message";
import {Thread} from "../model/thread";
import {buildParticipantNames} from "../model/buildParticipantNames";
import * as _ from 'lodash';


export function mapThreadToThreadSummary(participantId:number , messages: Message[], thread: Thread): UserThreadSummaryVM {

    const messagesPerThread = _.chain(messages).filter(msg => msg.threadId == thread.id).orderBy(msg => msg.id).value();

    const lastMessage: Message = _.last(messagesPerThread);

    return {
        id: thread.id,
        participantNames: buildParticipantNames(thread),
        timestamp: lastMessage.timestamp,
        lastMessage: lastMessage.text,
        read: thread.participants[participantId]
    };


}
