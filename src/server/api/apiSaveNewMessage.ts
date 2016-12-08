
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
            participantId = req.cookies['PARTICIPANTID'];

        const message: Message = {
            id: messageIdCounter++,
            threadId,
            timestamp: new Date().getTime(),
            text: payload.message,
            participantId
        };

        // save the new message, its already linked to a thread
        dbMessages[message.id] = message;

        const thread = findThreadById(threadId);

        const otherParticipantIds = _.keys(thread.participants).filter(id => id !== participantId);


        console.log("otherParticipantIds", otherParticipantIds);


        otherParticipantIds.forEach(participantId => {
            thread.participants[participantId] = false;
            dbMessagesQueuePerUser[participantId].push(message.id);

        });

        thread.participants[participantId] = true;


        console.log("thread ", thread, '\n');

        console.log("dbMessagesQueuePerUser", dbMessagesQueuePerUser);

        res.status(200).send();

    });

}


