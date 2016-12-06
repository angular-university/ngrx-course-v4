

import {Thread} from "./thread";
import {dbParticipants} from "../db/db-data";
import * as _ from 'lodash';

export function buildParticipantNames(thread:Thread) {
    return _.join(thread.participantIds.map(id => dbParticipants[id].name), ', ');
}