



import {Thread} from "../../shared/model/thread";
import * as _ from 'lodash';


export function findThreadsPerUser(threads: {[key:number]:Thread}, participantId:number) {

    const allThreads: Thread[] = <any> _.values(threads);

    return _.filter(allThreads, thread =>  _.includes(<any>_.keys(thread.participants), participantId.toString()));
}


