
import {Application} from 'express';
import {Thread} from "../model/thread";
import {dbThreads} from "../db/db-data";
import * as _ from 'lodash';
import {ThreadDetailVM} from "../view-model/thread-detail.vm";
import {buildParticipantNames} from "../model/buildParticipantNames";




export function apiGetThreadDetail(app: Application) {

    app.route('/api/threads-vm/:id').get((req, res) => {

        const threadId = req.params['id'];

        const threads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(threads,thread => thread.id == threadId);

        const threadVM: ThreadDetailVM = {
            participantNames: buildParticipantNames(thread),
            messages: null
        };

        res.status(200).json({payload: threadVM});

    });


}