


import {ApplicationState} from "../application-state";
import {findUnreadThreadsCountPerUser} from "../../../shared/model/findUnreadThreadsCountPerUser";
import {ThreadsVM} from "../../../shared/view-model/threads.vm";
import * as _ from 'lodash';
import {mapThreadToThreadSummary} from "../../../shared/mapping/mapThreadToThreadSummary";
import {Thread} from "../../../shared/model/thread";
import {Message} from "../../../shared/model/message";



export function mapStateToThreadSummariesAndCounter(state: ApplicationState): ThreadsVM {

    const unreadMessagesCounter = findUnreadThreadsCountPerUser(<any>_.values(state.storeData.threads), state.uiState.userId);

    const threads: Thread[] = <any>_.values(state.storeData.threads);

    const messages: Message[] =  <any>_.values(state.storeData.messages);

    return {
        unreadMessagesCounter,
        threadSummaries: threads.map(
            thread => mapThreadToThreadSummary(state.uiState.userId, messages, thread)
        )
    }

}


