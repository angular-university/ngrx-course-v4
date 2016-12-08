
import {Application} from 'express';
import {dbMessages, dbThreads, dbMessagesQueuePerUser} from "../db/db-data";
import {Message} from "../model/message";
import {Thread} from "../model/thread";
import * as _ from 'lodash';
import {findThreadById} from "../model/findThreadById";


let messageIdCounter = 20;


export function apiSaveNewMessage(app: Application) {

    app.route('/api/threads-vm').post((req, res) => {

        const payload = req.body;

        const threadId = parseInt(payload.threadId),
            participantId = parseInt(req.headers['participantid']);

        const message: Message = {
            id: messageIdCounter++,
            threadId,
            timestamp: new Date().getTime(),
            text: payload.message,
            participantId
        };

        // save the new message, it
        // s already linked to a thread
        dbMessages[message.id] = message;

        const thread = findThreadById(threadId);

        const otherParticipantIds = _.keys(thread.participants).filter(id => parseInt(id) !== participantId);


        otherParticipantIds.forEach(participantId => {
            thread.participants[participantId] = false;
            dbMessagesQueuePerUser[participantId].push(message.id);

        });

        thread.participants[participantId] = true;

        res.status(200).send();

    });

}


