


import {ApplicationState} from "../application-state";
import {findUnreadThreadsCountPerUser} from "../../../shared/model/findUnreadThreadsCountPerUser";
import {ThreadsVM} from "../../../shared/view-model/threads.vm";
import * as _ from 'lodash';
import {mapThreadToThreadSummary} from "../../../shared/mapping/mapThreadToThreadSummary";
import {Thread} from "../../../shared/model/thread";
import {Message} from "../../../shared/model/message";



export function mapStateToThreadSummariesAndCounter(state: ApplicationState): ThreadsVM {

    const unreadThreadsCounter = findUnreadThreadsCountPerUser(<any>_.values(state.threads), state.userId);

    const threads: Thread[] = <any>_.values(state.threads);

    const messages: Message[] =  <any>_.values(state.messages);

    return {
        unreadThreadsCounter,
        threadSummaries: threads.map(
            thread => mapThreadToThreadSummary(state.userId, messages, thread)
        )
    }

}


