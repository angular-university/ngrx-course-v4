import {Application} from 'express';

import * as _ from 'lodash';
import {dbThreads, dbParticipants, dbMessages} from "../db/db-data";
import {Thread} from "../../shared/model/thread";
import {ThreadsVM} from "../../shared/view-model/threads.vm";
import {Message} from "../../shared/model/message";
import {UserThreadSummaryVM} from "../../shared/view-model/user-thread-summary.vm";
import {buildParticipantNames} from "../../shared/model/buildParticipantNames";




export function apiGetAllThreadsPerUser(app: Application) {

    app.route('/api/threads-vm').get((req, res) => {

        const participantId = req.headers['participantid'];

        const allThreads: Thread[] = <any> _.values(dbThreads);

        const threadsPerUser = _.filter(allThreads, thread =>  _.includes(<any>_.keys(thread.participants), participantId));

        const unreadThreads = _.reduce(threadsPerUser,
            (acc, thread) => {

            if (!thread.participants[participantId]) {
                acc++;
            }
            return acc;
        }, 0);

        const threadsVm: ThreadsVM = {
            unreadThreadsCounter: unreadThreads,
            threadSummaries: <any>threadsPerUser.map(_.partial(mapThreadToThreadSummary, participantId))
        };

        res.status(200).json({payload: threadsVm});

    });

}


function mapThreadToThreadSummary(participantId:string, thread: Thread): UserThreadSummaryVM {

    const messages: Message[] =  <any>_.values(dbMessages);

    const messagesPerThread = _.chain(messages).filter(msg => msg.threadId == thread.id).orderBy(msg => msg.id).value();

    const lastMessage: Message = _.last(messagesPerThread);

    console.log('build names for thread ',thread);

    return {
        id: thread.id,
        participantNames: buildParticipantNames(thread),
        timestamp: lastMessage.timestamp,
        lastMessage: lastMessage.text,
        read: thread.participants[participantId]
    };


}


