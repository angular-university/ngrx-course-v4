

import {ThreadSummaryVM} from "./thread-summary.vm";


export interface ThreadsVM {
    unreadThreadsCounter: number;
    threadSummaries: ThreadSummaryVM[];
}