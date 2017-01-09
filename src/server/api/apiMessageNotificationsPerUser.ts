


import {Application} from 'express';
import {dbMessagesQueuePerUser, dbMessages} from "../db-data";


export function apiMessageNotificationsPerUser(app: Application) {


    app.route('/api/notifications/messages').post((req, res) => {

        const participantId = req.headers['userid'];

        if (!participantId) {
            res.status(200).json({payload:[]});
            return;
        }

        const messageIdsQueuedForUser = dbMessagesQueuePerUser[participantId];

        const messagesQueued = [];

        messageIdsQueuedForUser.forEach(messageId => {

            messagesQueued.push(dbMessages[messageId]);

        });

        dbMessagesQueuePerUser[participantId] = [];

        res.status(200).json({payload: messagesQueued});

    });

}