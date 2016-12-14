
import {Application} from 'express';
import {dbThreads} from "../db/db-data";
import {Thread} from "../model/thread";
import * as _ from 'lodash';


export function apiUpdateThread(app: Application) {

    app.route('/api/threads-vm/:id').patch((req, res) => {

        const participantId = req.headers['participantid'];

        const threadId = req.params['id'];

        const updatedProps = req.body;

        const allThreads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(allThreads, thread =>  thread.id == threadId );

        thread.participants[participantId] = 0;

        res.status(200).send();

    });

}