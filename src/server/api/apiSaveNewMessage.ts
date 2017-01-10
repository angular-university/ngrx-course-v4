


import {Application} from 'express';
import * as _ from 'lodash';
import {Message} from "../../../shared/model/message";
import {dbMessages, dbMessagesQueuePerUser} from "../db-data";
import {findThreadById} from "../persistence/findThreadById";


let messageIdCounter = 20;



export function apiSaveNewMessage(app: Application) {

    app.route('/api/threads/:id').post((req, res) => {

        const payload = req.body;

        const threadId = parseInt(req.params.id),
            participantId = parseInt(req.headers['userid']);

        const message: Message = {
            id: messageIdCounter++,
            threadId,
            timestamp: new Date().getTime(),
            text: payload.text,
            participantId
        };

        // save the new message, it's
        // already linked to a thread
        dbMessages[message.id] = message;

        const thread = findThreadById(threadId);
        thread.messageIds.push(message.id);

        const otherParticipantIds = _.keys(thread.participants).filter(id => parseInt(id) !== participantId);

        otherParticipantIds.forEach(participantId => {
            thread.participants[participantId] += 1;
            dbMessagesQueuePerUser[participantId].push(message.id);

        });

        thread.participants[participantId] = 0;

        res.status(200).send();

    });

}


