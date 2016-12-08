

import {Application} from 'express';
import {dbMessagesQueuePerUser, dbMessages} from "../db/db-data";
import {buildMessageVmFromMessage} from "../model/buildMessageVmFromMessage";


export function apiMessageNotificationsPerUser(app: Application) {


    app.route('/api/notifications/messages').post((req, res) => {

        const participantId = req.cookies['PARTICIPANTID'];

        console.log("participantId", participantId);
        console.log("dbMessagesQueuePerUser",dbMessagesQueuePerUser);

        const messageIdsQueuedForUser = dbMessagesQueuePerUser[participantId];

        console.log("messageIdsQueuedForUser", messageIdsQueuedForUser);

        const messagesQueued = [];

        messageIdsQueuedForUser.forEach(messageId => {

            messagesQueued.push(buildMessageVmFromMessage(dbMessages[messageId]));

        });

        dbMessagesQueuePerUser[participantId] = [];

        res.status(200).json({payload: messagesQueued});
    });

}