
import {Application} from 'express';
import {Thread} from "../model/thread";
import {dbThreads, dbMessages, dbParticipants} from "../db/db-data";
import * as _ from 'lodash';
import {ThreadDetailVM} from "../view-model/thread-detail.vm";
import {buildParticipantNames} from "../model/buildParticipantNames";
import {Message} from "../model/message";
import {MessageVM} from "../view-model/message.vm";




export function apiGetThreadDetail(app: Application) {

    app.route('/api/threads-vm/:id').get((req, res) => {

        const threadId = req.params['id'];

        const threads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(threads,thread => thread.id == threadId);

        let messagesPerThread: Message[] = _.filter(dbMessages, (message:any) => message.threadId == threadId);

        messagesPerThread = _.sortBy(messagesPerThread, message => message.id);

        const threadVM: ThreadDetailVM = {
            participantNames: buildParticipantNames(thread),
            messages: messagesPerThread.map(buildMessageVmFromMessage)
        };

        res.status(200).json({payload: threadVM});

    });


}


function buildMessageVmFromMessage({participantId, timestamp, text}): MessageVM {
    return {
        participantName: dbParticipants[participantId].name,
        timestamp,
        text
    }
}

