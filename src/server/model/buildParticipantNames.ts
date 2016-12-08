

import {Thread} from "./thread";
import {dbParticipants} from "../db/db-data";
import * as _ from 'lodash';

export function buildParticipantNames(thread:Thread) {

    console.log("thread.participants", thread.participants);


    const participantIds = _.keys(thread.participants);

    return _.join(participantIds.map(id => dbParticipants[id].name), ', ');
}