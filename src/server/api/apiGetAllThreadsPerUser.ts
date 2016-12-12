import {Application} from 'express';

import * as _ from 'lodash';
import {dbThreads, dbMessages} from "../db/db-data";
import {ThreadsVM} from "../../shared/view-model/threads.vm";
import {Message} from "../../shared/model/message";
import {findThreadsPerUser} from "./findThreadsPerUser";
import {mapThreadToThreadSummary} from "../../shared/mapping/mapThreadToThreadSummary";
import {findUnreadThreadsCountPerUser} from "../../shared/model/findUnreadThreadsCountPerUser";




export function apiGetAllThreadsPerUser(app: Application) {

    app.route('/api/threads-vm').get((req, res) => {

        const participantId = parseInt(req.headers['participantid']);

        const threadsPerUser = findThreadsPerUser(dbThreads, participantId);

        const unreadThreads = findUnreadThreadsCountPerUser(threadsPerUser, participantId);

        const messages: Message[] =  <any>_.values(dbMessages);

        const threadsVm: ThreadsVM = {
            unreadThreadsCounter: unreadThreads,
            threadSummaries: threadsPerUser.map(_.partial(mapThreadToThreadSummary, participantId, messages))
        };

        res.status(200).json({payload: threadsVm});

    });

}




