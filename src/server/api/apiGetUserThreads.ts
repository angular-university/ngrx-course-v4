

import {Application} from 'express';
import {findThreadsPerUser} from "./findThreadsPerUser";




export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req, res) => {

        const participantId = req.headers['participantid'];

        const threadsPerUser = findThreadsPerUser(parseInt(participantId));




        res.status(200).json({
            payload: {
                participants: [],
                threads: threadsPerUser,
                messages: []
            }
        });


    });


}