
import {Application} from 'express';
import {Thread} from "../model/thread";
import {dbThreads, dbMessages} from "../db/db-data";
import * as _ from 'lodash';
import {ThreadDetailVM} from "../view-model/thread-detail.vm";
import {buildParticipantNames} from "../model/buildParticipantNames";




export function apiGetThreadDetail(app: Application) {

    app.route('/api/threads-vm/:id').get((req, res) => {

        const threadId = req.params['id'];

        const threads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(threads,thread => thread.id == threadId);

        let messagesPerThread = _.filter(dbMessages, (message:any) => message.threadId == threadId);

        messagesPerThread = _.sortBy(messagesPerThread, message => message.id);

        const threadVM: ThreadDetailVM = {
            participantNames: buildParticipantNames(thread),
            messages: messagesPerThread
        };

        res.status(200).json({payload: threadVM});

    });


}