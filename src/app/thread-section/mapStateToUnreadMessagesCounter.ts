
import {ApplicationState} from "../store/application-state";
import {Thread} from "../../../shared/model/thread";
import * as _ from 'lodash';

const deepFreeze = require('deep-freeze-strict');

export function mapStateToUnreadMessagesCounter(state: ApplicationState): number {

    const currentUserId = state.uiState.userId;

    return deepFreeze(_.values<Thread>(state.storeData.threads)
        .reduce(
            (acc, thread) => acc + (thread.participants[currentUserId] || 0 )

            ,0));
}