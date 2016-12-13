
import {Application} from 'express';
import {dbMessages, dbThreads, dbMessagesQueuePerUser} from "../db/db-data";
import * as _ from 'lodash';
import {Message} from "../../shared/model/message";
import {findThreadById} from "../../shared/model/findThreadById";



let messageIdCounter = 20;


export function apiSaveNewMessage(app: Application) {

    app.route('/api/threads/:id').post((req, res) => {

        const payload = req.body;

        const threadId = parseInt(req.params.id),
            participantId = parseInt(req.headers['participantid']);

        console.log("threadId", threadId);

        const message: Message = {
            id: messageIdCounter++,
            threadId,
            timestamp: new Date().getTime(),
            text: payload.messageText,
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

        res.status(200).json({payload:message});

    });

}


