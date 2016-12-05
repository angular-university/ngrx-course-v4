

import {Application} from 'express';
import {Thread} from "../model/thread";
import {ThreadsVM} from "../view-model/threads.vm";
import * as _ from 'lodash';
import {dbThreads} from "../db/db-data";



export function apiGetAllThreads(app: Application) {

    app.route('/api/threads-vm').get((req, res) => {

        const threads: Thread[] = <any> _.values(dbThreads);

        const threadsVm: ThreadsVM = {
            unreadThreadsCounter: 2,
            threadSummaries: <any>threads
        };

        res.status(200).json({payload:threadsVm});

    });

}


