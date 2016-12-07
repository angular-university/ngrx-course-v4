
import {Application} from 'express';
import {dbMessages} from "../db/db-data";
import {Message} from "../model/message";


let messageIdCounter = 20;


export function apiSaveNewMessage(app: Application) {

    app.route('/api/threads-vm').post((req, res) => {

        const payload = req.body;

        const message: Message = {
            id: messageIdCounter++,
            threadId: parseInt(payload.threadId),
            timestamp: new Date().getTime(),
            text: payload.message,
            participantId: payload.participantId
        };

        dbMessages[message.id] = message;

        res.status(200).send();

    });

}


