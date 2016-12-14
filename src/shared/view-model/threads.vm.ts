




import {UserThreadSummaryVM} from "./user-thread-summary.vm";


export interface ThreadsVM {
    unreadMessagesCounter: number;
    threadSummaries: UserThreadSummaryVM[];
}