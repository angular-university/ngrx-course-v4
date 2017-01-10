
import {Application} from 'express';
import {Thread} from "../../../shared/model/thread";
import {dbThreads} from "../db-data";
import * as _ from 'lodash';



export function apiUpdateThread(app: Application) {

    app.route('/api/threads/:id').patch((req, res) => {

        const participantId = req.headers['userid'];

        const threadId = req.params['id'];

        const updatedProps = req.body;

        const allThreads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(allThreads, thread =>  thread.id == threadId );

        if (updatedProps.hasOwnProperty('read')) {
            thread.participants[participantId] = 0;
        }

        res.status(200).send();

    });

}