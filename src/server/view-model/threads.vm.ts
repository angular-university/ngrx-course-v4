




import {UserThreadSummaryVM} from "./user-thread-summary.vm";


export interface ThreadsVM {
    unreadThreadsCounter: number;
    threadSummaries: UserThreadSummaryVM[];
}