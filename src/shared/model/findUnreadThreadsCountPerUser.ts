
import * as _ from 'lodash';
import {Thread} from "./thread";


export function findUnreadThreadsCountPerUser(threadsPerUser: Thread[], participantId: number) {
return  _.reduce(threadsPerUser,
        (acc, thread) => {

            if (!thread.participants[participantId]) {
                acc++;
            }
            return acc;
        }, 0);
}