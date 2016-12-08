




import {dbThreads} from "../db/db-data";
import {Thread} from "./thread";
import * as _ from 'lodash';



export function findThreadById(threadId:number) {

    const threads: Thread[] = <any> _.values(dbThreads);

    return _.find(threads,thread => thread.id == threadId);
}