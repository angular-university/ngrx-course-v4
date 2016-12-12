

import {Thread} from "./thread";
import * as _ from 'lodash';
import {dbParticipants} from "../../server/db/db-data";
import {Participant} from "./participant";



export function buildParticipantNames(thread:Thread, participants: {[key:number]: Participant}) {

    const participantIds = _.keys(thread.participants);

    return _.join(participantIds.map(id => participants[id].name), ', ');
}