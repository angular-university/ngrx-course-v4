import {Application} from 'express';
import {Thread} from "../model/thread";
import {ThreadsVM} from "../view-model/threads.vm";
import * as _ from 'lodash';
import {dbThreads, dbParticipants, dbMessages} from "../db/db-data";
import {ThreadSummaryVM} from "../view-model/thread-summary.vm";
import {Message} from "../model/message";


export function apiGetAllThreads(app: Application) {

    app.route('/api/threads-vm').get((req, res) => {

        const threads: Thread[] = <any> _.values(dbThreads);

        const threadsVm: ThreadsVM = {
            unreadThreadsCounter: 2,
            threadSummaries: <any>threads.map(mapThreadToThreadSummary)
        };

        res.status(200).json({payload: threadsVm});

    });

}


function mapThreadToThreadSummary(thread: Thread): ThreadSummaryVM {

    const messages: Message[] =  <any>_.values(dbMessages);

    const messagesPerThread = _.chain(messages).filter(msg => msg.threadId == thread.id).orderBy(msg => msg.id).value();

    const lastMessage: Message = _.last(messagesPerThread);

    console.log(lastMessage);

    return {
        participantNames: _.join(thread.participantIds.map(id => dbParticipants[id].name), ', '),
        timestamp: lastMessage.timestamp,
        lastMessage: lastMessage.text
    };


}