
import * as _ from 'lodash';
import {Thread} from "./thread";


export function findUnreadThreadsCountPerUser(threadsPerUser: Thread[], participantId: number) {
return  _.reduce(threadsPerUser,
        (acc, thread) => {
            return acc + thread.participants[participantId];
        }, 0);
}