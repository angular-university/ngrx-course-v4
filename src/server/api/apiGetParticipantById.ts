
import {Application} from 'express';
import * as _ from 'lodash';
import {dbParticipants} from "../db/db-data";
import {Participant} from "../../shared/model/participant";





export function apiGetParticipantById(app: Application) {

    app.route('/api/participants/:id').get((req, res) => {

        const participantId = req.params['id'];

        res.status(200).json({payload: dbParticipants[participantId]});

    });

}