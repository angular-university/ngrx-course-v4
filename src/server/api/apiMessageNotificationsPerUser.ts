


import {Application} from 'express';
import {dbMessagesQueuePerUser, dbMessages, dbThreads} from "../db-data";


export function apiMessageNotificationsPerUser(app: Application) {


    app.route('/api/notifications/messages').post((req, res) => {

        const participantId = req.headers['userid'];

        if (!participantId) {
            res.status(200).json({payload:[]});
            return;
        }

        const unreadMessageIds = dbMessagesQueuePerUser[participantId];

        const unreadMessages = unreadMessageIds.map( messageId => dbMessages[messageId] );

        dbMessagesQueuePerUser[participantId] = [];

        unreadMessages.forEach(message => {
           dbThreads[message.threadId].participants[participantId] -= 1;
        });

        res.status(200).json({payload: unreadMessages});

    });

}