




import {Thread} from "./thread";
import * as _ from 'lodash';
import {dbThreads} from "../../server/db/db-data";



export function findThreadById(threadId:number) {

    const threads: Thread[] = <any> _.values(dbThreads);

    return _.find(threads,thread => thread.id == threadId);
}