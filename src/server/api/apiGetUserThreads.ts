

import {Application} from 'express';
import {findThreadsPerUser} from "./findThreadsPerUser";
import * as _ from 'lodash';
import {Message} from "../../shared/model/message";
import {dbMessages, dbParticipants} from "../db/db-data";



export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req, res) => {

        const participantId = req.headers['participantid'];

        const threadsPerUser = findThreadsPerUser(parseInt(participantId));

        let messages = [],
            participantIds = [];

        threadsPerUser.forEach(thread => {
            messages.push(_.filter(dbMessages, (message:any) => message.threadId == thread.id));
            participantIds = participantIds.concat(_.keys(thread.participants))
        });

        console.log('participantIds ', participantIds);

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        res.status(200).json({
            payload: {
                participants: participants,
                threads: threadsPerUser,
                messages: messages
            }
        });


    });


}