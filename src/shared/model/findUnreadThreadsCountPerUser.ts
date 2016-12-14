
import * as _ from 'lodash';
import {Thread} from "./thread";


export function findUnreadThreadsCountPerUser(threadsPerUser: Thread[], participantId: number) {
return  _.reduce(threadsPerUser,
        (acc, thread) => {

            if (!thread.participants[participantId]) {
                acc += thread.participants[participantId];
            }
            return acc;
        }, 0);
}