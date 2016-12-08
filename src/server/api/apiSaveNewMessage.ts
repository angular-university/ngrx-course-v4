
import {Application} from 'express';
import {dbMessages, dbThreads} from "../db/db-data";
import {Message} from "../model/message";
import {Thread} from "../model/thread";
import * as _ from 'lodash';


let messageIdCounter = 20;


export function apiSaveNewMessage(app: Application) {

    app.route('/api/threads-vm').post((req, res) => {

        const payload = req.body;

        const threadId = parseInt(payload.threadId),
            participantId = payload.participantId;

        const message: Message = {
            id: messageIdCounter++,
            threadId,
            timestamp: new Date().getTime(),
            text: payload.message,
            participantId
        };

        dbMessages[message.id] = message;

        const threads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(threads,thread => thread.id == threadId);

        const otherParticipantIds = _.keys(thread.participants).filter(id => id !== participantId);


        otherParticipantIds.forEach(participantId => thread.participants[participantId] = false);
        thread.participants[participantId] = true;


        res.status(200).send();

    });

}


