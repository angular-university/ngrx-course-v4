
import {Application} from 'express';
import {dbThreads, dbMessages, dbParticipants} from "../db/db-data";
import * as _ from 'lodash';
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";
import {buildParticipantNames} from "../../shared/model/buildParticipantNames";
import {buildMessageVmFromMessage} from "../../shared/model/buildMessageVmFromMessage";
import {ThreadDetailVM} from "../../shared/view-model/thread-detail.vm";




export function apiGetThreadDetail(app: Application) {

    app.route('/api/threads-vm/:id').get((req, res) => {

        const threadId = req.params['id'];

        const threads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(threads,thread => thread.id == threadId);

        let messagesPerThread: Message[] = _.filter(dbMessages, (message:any) => message.threadId == threadId);

        messagesPerThread = _.sortBy(messagesPerThread, message => message.id);

        const threadVM: ThreadDetailVM = {
            id: threadId,
            participantNames: buildParticipantNames(thread, dbParticipants),
            messages: messagesPerThread.map(buildMessageVmFromMessage)
        };

        res.status(200).json({payload: threadVM});

    });


}



