

import {Application} from 'express';
import {findThreadsPerUser} from "./findThreadsPerUser";
import * as _ from 'lodash';
import {dbMessages, dbParticipants, dbThreads} from "../db/db-data";




export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req, res) => {

        const participantId = req.headers['participantid'];

        const threadsPerUser = findThreadsPerUser(dbThreads, parseInt(participantId));

        let messages = [],
            participantIds = [];

        threadsPerUser.forEach(thread => {
            messages = messages.concat(_.filter(dbMessages, (message:any) => message.threadId == thread.id));
            participantIds = participantIds.concat(_.keys(thread.participants))
        });

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        res.status(200).json({
            payload: {
                participants: _.keyBy(participants, 'id'),
                threads: _.keyBy(threadsPerUser, 'id'),
                messages: _.keyBy(messages, 'id')
            }
        });


    });


}