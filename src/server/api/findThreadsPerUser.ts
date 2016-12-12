



import {Thread} from "../../shared/model/thread";
import {dbThreads} from "../db/db-data";
import * as _ from 'lodash';


export function findThreadsPerUser(participantId:number) {

    const allThreads: Thread[] = <any> _.values(dbThreads);

    return _.filter(allThreads, thread =>  _.includes(<any>_.keys(thread.participants), participantId.toString()));
}


